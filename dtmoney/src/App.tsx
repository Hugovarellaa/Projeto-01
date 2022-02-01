import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/GlobalStyle";
import Modal from "react-modal";
import { useState } from "react";
import { TransactionModal } from "./components/TransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleModalIsOpen() {
    setModalIsOpen(true);
  }
  function handleModalIsClose() {
    setModalIsOpen(false);
  }

  return (
    <>
      <TransactionModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalIsClose}
      />
      <GlobalStyle />
      <Header isOpen={handleModalIsOpen} />
      <Dashboard />
    </>
  );
}
