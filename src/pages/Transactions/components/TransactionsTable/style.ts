import styled from 'styled-components';

export const Transactionstable = styled.table`
    width: 100%;
    margin: 1.5rem 0;

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
