import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { PriceHighlightVariant } from '../pages/Transactions/style';
import { api } from '../lib/axios';
import { AxiosResponse } from 'axios';

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
    getTransactions: (search?: string) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsProvider: FC<TransactionsProviderProps> = ({ children }) => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    const getTransactions = async (search?: string): Promise<void> => {
        try {
            const { data }: AxiosResponse<Transaction[]> = await api.get('transactions', {
                params: {
                    q: search,
                },
            });

            for (const i in data) {
                data[+i].createdAt = new Date(data[+i].createdAt);
            }

            setTransactions(data);
        } catch (err: unknown) {
            console.error(err);
            alert('Não foi possível buscar as transações!');
        }
    };

    useEffect(() => {
        getTransactions().then();
    }, []);

    return (
        <TransactionsContext.Provider value={{ transactions, getTransactions }}>
            {children}
        </TransactionsContext.Provider>
    );
};
