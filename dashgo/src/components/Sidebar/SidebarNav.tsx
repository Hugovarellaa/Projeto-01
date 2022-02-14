import { Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodFill,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboardLine} title="Dashboard" href="/dashboard" />
        <NavLink icon={RiContactsLine} title="Usuários" href="/users" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavSection title="GERAL">
          <NavLink icon={RiInputMethodFill} title="Formulários" href="/forms" />
          <NavLink icon={RiContactsLine} title="Automação" href="/automation" />
        </NavSection>
      </NavSection>
    </Stack>
  );
}
