import { FC } from 'react';
import {
    TransactionsCardsCard,
    TransactionsCardsCardDescription,
    TransactionsCardsCardInformation,
    TransactionsCardsContainer,
} from './style';
import { useContextSelector } from 'use-context-selector';
import { TransactionsContext } from '../../../../contexts/Transactions';
import { PriceHighlight } from '../../style';
import { dateMask, moneyMask } from '../../../../utils/formatter';
import { CalendarBlank, TagSimple } from 'phosphor-react';

export const TransactionsCards: FC = () => {
    const transactions = useContextSelector(TransactionsContext, (contenxt) => contenxt.transactions);

    return (
        <TransactionsCardsContainer>
            {transactions.map(({ id, description, price, type, category, createdAt }) => (
                <TransactionsCardsCard key={id}>
                    <TransactionsCardsCardDescription>
                        <span>{description}</span>

                        <PriceHighlight variant={type}>
                            {type === 'outcome' && '- '}
                            {moneyMask(price)}
                        </PriceHighlight>
                    </TransactionsCardsCardDescription>

                    <TransactionsCardsCardInformation>
                        <span>
                            <TagSimple />
                            <span>{category}</span>
                        </span>

                        <span>
                            <CalendarBlank />
                            <span>{dateMask(createdAt)}</span>
                        </span>
                    </TransactionsCardsCardInformation>
                </TransactionsCardsCard>
            ))}
        </TransactionsCardsContainer>
    );
};
