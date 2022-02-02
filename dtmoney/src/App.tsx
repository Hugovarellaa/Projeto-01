import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/GlobalStyle";
import { createServer } from "miragejs";
import Modal from "react-modal";
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";

Modal.setAppElement("#root");

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", (req, res) => {
      return [
        {
          id: 1,
          title: "exemplo 1",
          amount: 400,
          type: "depoist",
          category: "transactions",
        },
      ];
    });
  },
});

export function App() {
  const [transactionModal, setTransactionModal] = useState(false);
  function handleModalOpen() {
    setTransactionModal(true);
  }
  function handleModalClose() {
    setTransactionModal(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header isOpen={handleModalOpen} />
      <Dashboard />
      <TransactionModal
        isOpen={transactionModal}
        onRequestClose={handleModalClose}
      />
    </>
  );
}
