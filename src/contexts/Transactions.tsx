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
            const url = new URL('http://localhost:3333/transactions');

            if (search) url.searchParams.append('q', search);

            const data = await fetch(url)
                .then((response) => response.json())
                .then((response: Transaction[]) => {
                    for (const i in response) {
                        response[+i].createdAt = new Date(response[+i].createdAt);
                    }

                    return response;
                });

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
