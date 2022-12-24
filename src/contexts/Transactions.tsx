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
            const { data }: AxiosResponse<Transaction[]> = await api.get('transactions', {
                params: {
                    _sort: 'createdAt',
                    _order: 'desc',
                    q: search,
                },
            });

            for (const i in data) data[+i].createdAt = new Date(data[+i].createdAt);

            setTransactions(data);
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
        const { data }: AxiosResponse<Transaction> = await api.post('transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        } as Transaction);

        setTransactions((state) => [data, ...state]);
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
