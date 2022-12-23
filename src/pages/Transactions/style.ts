import styled from 'styled-components';

export const TransactionsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const Transactionstable = styled.table`
    width: 100%;
    margin-top: 1.5rem;

    border-collapse: separate;
    border-spacing: 0 0.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${({ theme }) => theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
        }

        &:last-child {
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;

interface PriceHighlightProps {
    variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${({ theme, variant }) => (variant === 'income' ? theme['green-300'] : theme['red-300'])};
`;
