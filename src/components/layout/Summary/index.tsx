import { FC } from 'react';
import { SummaryCard, SummaryContainer } from './style';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { moneyMask } from '../../../utils/formatter';
import { useSummary } from '../../../hooks/useSummary';

export const Summary: FC = () => {
    const { income, outcome, total } = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard iconColor="green">
                <header>
                    <span>Entradas</span>

                    <ArrowCircleUp size={32} />
                </header>

                <strong>{moneyMask(income)}</strong>
            </SummaryCard>

            <SummaryCard iconColor="red">
                <header>
                    <span>Saídas</span>

                    <ArrowCircleDown size={32} />
                </header>

                <strong>{moneyMask(outcome)}</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>

                    <CurrencyDollar size={32} />
                </header>

                <strong>{moneyMask(total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    );
};
