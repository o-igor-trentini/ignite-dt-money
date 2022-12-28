import styled from 'styled-components';

export const TransactionsCardsContainer = styled.div`
    margin: 1.5rem 0;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
`;

export const TransactionsCardsCard = styled.div`
    width: 100%;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    border-radius: 6px;
    background: ${({ theme }) => theme['gray-700']};
`;

export const TransactionsCardsCardDescription = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;

    line-height: 1.6;

    span:first-child {
        font-size: 1rem;
        color: ${({ theme }) => theme['gray-300']};
    }

    span:last-child {
        font-size: 1.25rem;
        font-weight: bold;
    }
`;

export const TransactionsCardsCardInformation = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1rem;
    color: ${({ theme }) => theme['gray-500']};

    span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;

        line-height: 1.6;
    }
`;
