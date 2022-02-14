import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Siderbar } from "../../components/Siderbar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box flex="1" borderRadius={8} background="gray.800" padding="8"></Box>
      </Flex>
    </Box>
  );
}
