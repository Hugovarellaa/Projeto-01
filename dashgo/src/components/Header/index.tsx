import { Avatar, Box, Flex, Icon, Input, Stack, Text } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      align="center"
    >
      {/* Logo */}
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
        DashGo
        <Text as="span" color="pink.500" marginLeft="1">
          .
        </Text>
      </Text>
      {/* Search Box */}
      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        background="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: "gray.400",
          }}
          paddingX="4"
          marginRight="4j"
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>
      {/* Profile */}
      <Flex align="center" marginLeft="auto">
        <Stack
          spacing="8"
          direction="row"
          mx="8"
          paddingRight="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </Stack>
        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Hugo Alves Varella</Text>
            <Text color="gray.300" fontSize="small">
              hugovarellaa@gmail.com
            </Text>
          </Box>
          <Avatar
            fontSize="md"
            name="Hugo Varella"
            src="https://github.com/Hugovarellaa.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
