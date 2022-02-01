import Modal from "react-modal";
import { Button, Container, RadioBox } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({
  isOpen,
  onRequestClose,
}: TransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-container"
      className="modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <form action="">
          <input type="text" name="nome" id="nome" placeholder="Nome" />
          <input type="number" name="preco" id="preco" placeholder="Preço" />
          <Button>
            <RadioBox>
              <img src={incomeImg} alt="Entradas" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox>
              <img src={outcomeImg} alt="Saídas" />
              <span>Saídas</span>
            </RadioBox>
          </Button>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Categoria"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  );
}
