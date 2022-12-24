import { FC, useContext } from 'react';
import { SummaryCard, SummaryContainer } from './style';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { TransactionsContext } from '../../../contexts/Transactions';

interface SummaryInformation {
    income: number;
    outcome: number;
    total: number;
}

export const Summary: FC = () => {
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

    return (
        <SummaryContainer>
            <SummaryCard iconColor="green">
                <header>
                    <span>Entradas</span>

                    <ArrowCircleUp size={32} />
                </header>

                <strong>{summary.income}</strong>
            </SummaryCard>

            <SummaryCard iconColor="red">
                <header>
                    <span>Saídas</span>

                    <ArrowCircleDown size={32} />
                </header>

                <strong>{summary.outcome}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>

                    <CurrencyDollar size={32} />
                </header>

                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
};
