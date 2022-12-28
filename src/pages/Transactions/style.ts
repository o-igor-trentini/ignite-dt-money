import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
`;

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export type PriceHighlightVariant = 'income' | 'outcome';

interface PriceHighlightProps {
    variant: PriceHighlightVariant;
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${({ theme, variant }) => (variant === 'income' ? theme['green-300'] : theme['red-300'])};
`;
