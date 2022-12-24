import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { PriceHighlightVariant } from '../pages/Transactions/style';
import {
    createTransaction as createTran,
    getStoredTransactions,
    getTransactions as getTran,
} from '../service/transactions';

export interface Transaction {
    id?: string;
    description: string;
    type: PriceHighlightVariant;
    category: string;
    price: number;
    createdAt: Date;
}

interface TransactionsContextType {
    transactions: Transaction[];
    getTransactions: (search?: string) => Promise<void>;
    createTransaction: (values: Omit<Transaction, 'createdAt' | 'id'>) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsProvider: FC<TransactionsProviderProps> = ({ children }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const getTransactions = async (search?: string): Promise<void> => {
        try {
            const isDevEnvironment = import.meta.env.DEV;

            if (isDevEnvironment) setTransactions(await getTran(search));
            else setTransactions(getStoredTransactions(search));
        } catch (err: unknown) {
            console.error(err);
            alert('Não foi possível buscar as transações!');
        }
    };

    const createTransaction = async ({
        type,
        price,
        category,
        description,
    }: Omit<Transaction, 'createdAt' | 'id'>): Promise<void> => {
        try {
            const response = await createTran({ description, price, category, type });

            setTransactions((state) => [response, ...state]);
        } catch (err: unknown) {
            alert('Não foi possível cadastrar uma nova transação!');
            console.error(err);
        }
    };

    useEffect(() => {
        getTransactions().then();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions, getTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
};
