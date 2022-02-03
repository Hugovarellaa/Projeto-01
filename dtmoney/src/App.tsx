import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/GlobalStyle";
import { createServer, Model } from "miragejs";
import Modal from "react-modal";
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionProvider } from "./hooks/useTransaction";

Modal.setAppElement("#root");

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [],
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", (request, response) => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
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
    <TransactionProvider>
      <GlobalStyle />
      <Header isOpen={handleModalOpen} />
      <Dashboard />
      <TransactionModal
        isOpen={transactionModal}
        onRequestClose={handleModalClose}
      />
    </TransactionProvider>
  );
}
