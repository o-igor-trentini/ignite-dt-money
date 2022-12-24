import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { PriceHighlightVariant } from '../pages/Transactions/style';

export interface Transaction {
    id: string;
    description: string;
    type: PriceHighlightVariant;
    category: string;
    price: number;
    createdAt: Date;
}

interface TransactionsContextType {
    transactions: Transaction[];
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsProvider: FC<TransactionsProviderProps> = ({ children }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('http://localhost:3333/transactions')
            .then((response) => response.json())
            .then((response: Transaction[]) => {
                for (const i in response) {
                    response[+i].createdAt = new Date(response[+i].createdAt);
                }

                return response;
            })
            .then(setTransactions)
            .catch(() => alert('Não foi possível buscar as transações!'));
    }, []);

    return <TransactionsContext.Provider value={{ transactions }}>{children}</TransactionsContext.Provider>;
};
