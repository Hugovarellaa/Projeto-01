import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { SubmitHandler, useForm } from "react-hook-form";

type SigninFormData = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { register, handleSubmit, formState } = useForm();

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
            <Input type="email" label="E-mail" {...register("email")} />
            <Input type="password" label="Senha" {...register("password")} />
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
