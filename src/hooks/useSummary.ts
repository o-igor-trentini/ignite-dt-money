import { useContext } from 'react';
import { TransactionsContext } from '../contexts/Transactions';

interface SummaryInformation {
    income: number;
    outcome: number;
    total: number;
}

export const useSummary = (): SummaryInformation => {
    const { transactions } = useContext(TransactionsContext);

    const summary = transactions.reduce<SummaryInformation>(
        (acc, item) => {
            if (item.type === 'income') {
                acc.income += item.price;
                acc.total += item.price;
            } else {
                acc.outcome += item.price;
                acc.total -= item.price;
            }

            return acc;
        },
        { income: 0, outcome: 0, total: 0 },
    );

    return summary;
};
