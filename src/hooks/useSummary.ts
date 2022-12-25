import { TransactionsContext } from '../contexts/Transactions';
import { useContextSelector } from 'use-context-selector';
import { useMemo } from 'react';

interface SummaryInformation {
    income: number;
    outcome: number;
    total: number;
}

export const useSummary = (): SummaryInformation => {
    const transactions = useContextSelector(TransactionsContext, (contenxt) => contenxt.transactions);

    const summary = useMemo(
        () =>
            transactions.reduce<SummaryInformation>(
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
            ),
        [transactions],
    );

    return summary;
};
