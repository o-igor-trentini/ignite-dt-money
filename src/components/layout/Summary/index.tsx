import { FC } from 'react';
import { SummaryCard, SummaryContainer } from './style';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';

export const Summary: FC = () => {
    return (
        <SummaryContainer>
            <SummaryCard iconColor="green">
                <header>
                    <span>Entradas</span>

                    <ArrowCircleUp size={32} />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard iconColor="red">
                <header>
                    <span>Saídas</span>

                    <ArrowCircleDown size={32} />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>

                    <CurrencyDollar size={32} />
                </header>

                <strong>R$ 17.400,00</strong>
            </SummaryCard>
        </SummaryContainer>
    );
};
