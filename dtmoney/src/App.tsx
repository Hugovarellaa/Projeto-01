import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/GlobalStyle";
import { createServer, Model } from "miragejs";
import Modal from "react-modal";
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";

Modal.setAppElement("#root");

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salario",
          amount: 3500,
          type: "deposit",
          category: "Dev",
          createdAt: new Date("2022-02-02"),
        },
        {
          id: 2,
          title: "Aluguel",
          amount: 1500,
          type: "withdraw",
          category: "Casa",
          createdAt: new Date("2022-02-05"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", (request, response) => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

export function App() {
  const [transactionModal, setTransactionModal] = useState(false);
  function handleModalOpen() {
    setTransactionModal(true);
  }
  function handleModalClose() {
    setTransactionModal(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header isOpen={handleModalOpen} />
      <Dashboard />
      <TransactionModal
        isOpen={transactionModal}
        onRequestClose={handleModalClose}
      />
    </>
  );
}
