import { Container } from "./style";

export function TransactionTable() {
  return (
    <Container>
      <thead>
        <tr>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento de site</td>
          <td className="deposit">R$ 12.000,00</td>
          <td>Venda</td>
          <td>13/04/2021</td>
        </tr>

        <tr>
          <td>Aluguel de Apt</td>
          <td className="withdraw">- R$ 2.000,00</td>
          <td>Aluguel</td>
          <td>15/04/2021</td>
        </tr>
      </tbody>
    </Container>
  );
}
