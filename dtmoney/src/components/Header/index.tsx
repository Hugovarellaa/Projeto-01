import { Container, Content } from "./style";
import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  isOpen: () => void;
}

export function Header({ isOpen }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo dtmoney" />
        <button onClick={isOpen}>Nova Transação</button>
      </Content>
    </Container>
  );
}
