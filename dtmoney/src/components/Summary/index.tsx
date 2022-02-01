import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./style";

export function Summary() {
  return (
    <Container>
      <div>
        <div>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </div>
        <strong>R$ 3.000,00</strong>
      </div>

      <div>
        <div>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </div>
        <strong>R$ 3.000,00</strong>
      </div>

      <div>
        <div>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </div>
        <strong>R$ 3.000,00</strong>
      </div>
    </Container>
  );
}
