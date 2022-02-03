import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";

interface TransactionContextProps {
  children: ReactNode;
}

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionInput = {
  title: string;
  amount: number;
  type: string;
  category: string;
};

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transactionInput: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionContextProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <>
      <TransactionContext.Provider value={{ transactions, createTransaction }}>
        {children}
      </TransactionContext.Provider>
    </>
  );
}

export const useTransaction = () => {
  const context = useContext(TransactionContext);
  return context;
};
