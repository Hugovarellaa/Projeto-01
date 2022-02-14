import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SigninFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail Inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Sua senha tem que ter no minimo 6 Caracteres"),
});

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SigninFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <>
      <Flex width="100vw" height="100vh" align="center" justify="center">
        <Flex
          onSubmit={handleSubmit(handleSignIn)}
          as="form"
          width="100%"
          maxWidth={360}
          background="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="5">
            <Input
              type="email"
              label="E-mail"
              {...register("email")}
              error={errors.email}
            />
            <Input
              type="password"
              label="Senha"
              {...register("password")}
              error={errors.password}
            />
          </Stack>

          <Button
            type="submit"
            marginTop="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SignIn;
