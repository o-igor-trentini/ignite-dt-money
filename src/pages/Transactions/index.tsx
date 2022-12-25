import { FC } from 'react';
import { Header } from '../../components/layout/Header';
import { Summary } from '../../components/layout/Summary';
import { PriceHighlight, TransactionsContainer, Transactionstable } from './style';
import { SearchForm } from './components/SearchForm';
import { TransactionsContext } from '../../contexts/Transactions';
import { dateMask, moneyMask } from '../../utils/formatter';
import { useContextSelector } from 'use-context-selector';

export const Transactions: FC = () => {
    const transactions = useContextSelector(TransactionsContext, (contenxt) => contenxt.transactions);

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
                                    <PriceHighlight variant={type}>
                                        {type === 'outcome' && '- '}
                                        {moneyMask(price)}
                                    </PriceHighlight>
                                </td>
                                <td>{category}</td>
                                <td>{dateMask(createdAt)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Transactionstable>
            </TransactionsContainer>
        </div>
    );
};
