import { FC } from 'react';
import { Transactionstable } from './style';
import { dateMask, moneyMask } from '../../../../utils/formatter';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts/Transactions';
import { PriceHighlight } from '../../style';

export const TransactionsTable: FC = () => {
    const transactions = useContextSelector(TransactionsContext, (contenxt) => contenxt.transactions);

    return (
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
    );
};
