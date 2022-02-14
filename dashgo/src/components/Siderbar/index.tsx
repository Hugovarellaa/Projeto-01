import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodFill,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Siderbar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine} title="Dashboard" />
          <NavLink icon={RiContactsLine} title="Usuários" />
        </NavSection>
        <NavSection title="AUTOMAÇÃO">
          <NavSection title="GERAL">
            <NavLink icon={RiInputMethodFill} title="Formulários" />
            <NavLink icon={RiContactsLine} title="Automação" />
          </NavSection>
        </NavSection>
      </Stack>
    </Box>
  );
}
