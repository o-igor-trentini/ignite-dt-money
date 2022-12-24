import { AxiosResponse } from 'axios/index';
import { api } from '../../lib/axios';
import { Transaction } from '../../contexts/Transactions';
import { v4 as uuidV4 } from 'uuid';

const isDevEnvironment = import.meta.env.DEV;

export const getStoredTransactions = (search?: string): Transaction[] => {
    const storedTransactions = localStorage.getItem('ignite-dt-money@transactions');

    if (storedTransactions) {
        const data = JSON.parse(storedTransactions) as Transaction[];

        data.sort((a, b) => (new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1));

        if (search)
            return data.filter(
                (item) =>
                    item.category.includes(search) ||
                    String(item.price).includes(search) ||
                    item.description.includes(search) ||
                    String(item.createdAt).includes(search),
            );

        return data;
    }

    return [];
};

export const getTransactions = async (search?: string): Promise<Transaction[]> => {
    let transactions: Transaction[] = [];

    if (isDevEnvironment) {
        const { data }: AxiosResponse<Transaction[]> = await api.get('transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: search,
            },
        });

        transactions = data;
    } else {
        transactions = getStoredTransactions();
    }

    if (transactions && transactions.length > 0)
        for (const i in transactions) transactions[+i].createdAt = new Date(transactions[+i].createdAt);

    return transactions;
};

const createStoredTransaction = (transaction: Transaction): void => {
    const storedTransactions = localStorage.getItem('ignite-dt-money@transactions');

    let storedData: Transaction[] = [];

    if (storedTransactions) {
        const data = JSON.parse(storedTransactions) as Transaction[];

        storedData = data;
    }

    storedData.push(transaction);
    localStorage.setItem('ignite-dt-money@transactions', JSON.stringify(storedData));
};

export const createTransaction = async ({
    type,
    price,
    category,
    description,
}: Omit<Transaction, 'createdAt' | 'id'>): Promise<Transaction> => {
    const transaction: Transaction = {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
    };

    if (isDevEnvironment) {
        const {
            data: { id },
        }: AxiosResponse<Transaction> = await api.post('transactions', transaction);

        transaction.id = id;
    } else {
        transaction.id = uuidV4();

        createStoredTransaction(transaction);
    }

    return transaction;
};
