import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";
import { query as q } from "faunadb";
import { faunadb } from "../../services/fauna";

type User = {
  ref: {
    id: string;
  };
  data: {
    stripe_customer_id: string;
  };
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    //buscar informações de login
    const session = await getSession({ req });

    //buscar o usuario por email no faunadb
    const user = await faunadb.query<User>(
      q.Get(q.Match(q.Index("user_by_email"), q.Casefold(session.user.email)))
    );

    //Evitar duplicidade no bando de dados e no stripe
    let customerId = user.data.stripe_customer_id;

    if (!customerId) {
      //Cria usuario no painel do stripe
      const stripeCustomer = await stripe.customers.create({
        email: session.user.email,
        //   metadata
      });
      //Registra o id do usuario do stripe nao banco de dados do faunadb
      await faunadb.query(
        q.Update(q.Ref(q.Collection("users"), user.ref.id), {
          data: { stripe_customer_id: stripeCustomer.id },
        })
      );
      customerId = stripeCustomer.id;
    }
    //Configuração do painel de pagamento do stripe
    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      allow_promotion_codes: true,
      line_items: [{ price: "price_1JsSzEH6aihmDxYbnis4Pjbe", quantity: 1 }],
      mode: "subscription",
      success_url: process.env.STRIPE_SUCESS_URL,
      cancel_url: process.env.STRIPE_CANCEL_URL,
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
