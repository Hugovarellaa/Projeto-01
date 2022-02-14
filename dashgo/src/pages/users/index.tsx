import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Siderbar } from "../../components/Siderbar";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />
      </Flex>
    </Box>
  );
}
