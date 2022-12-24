import { FC, useEffect, useState } from 'react';
import { Header } from '../../components/layout/Header';
import { Summary } from '../../components/layout/Summary';
import { PriceHighlight, PriceHighlightVariant, TransactionsContainer, Transactionstable } from './style';
import { SearchForm } from './components/SearchForm';

interface Transaction {
    id: string;
    description: string;
    type: PriceHighlightVariant;
    category: string;
    price: string;
    createdAt: string;
}

export const Transactions: FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        fetch('http://localhost:3333/transactions')
            .then((response) => response.json())
            .then(setTransactions)
            .catch(() => alert('Não foi possível buscar as transações!'));
    }, []);

    return (
        <div>
            <Header />

            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <Transactionstable>
                    <tbody>
                        {transactions.map(({ id, description, type, price, category, createdAt }) => (
                            <tr key={id}>
                                <td width="50%">{description}</td>
                                <td>
                                    <PriceHighlight variant={type}>{price}</PriceHighlight>
                                </td>
                                <td>{category}</td>
                                <td>{createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </Transactionstable>
            </TransactionsContainer>
        </div>
    );
};
