import styled from 'styled-components';

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;

    input {
        flex: 1;
        padding: 1rem;

        border-radius: 6px;
        border: 0;

        background: ${({ theme }) => theme['gray-900']};
        color: ${({ theme }) => theme['gray-300']};

        &::placeholder {
            color: ${({ theme }) => theme['gray-500']};
        }
    }

    button {
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;

        color: ${({ theme }) => theme['green-300']};
        font-weight: bold;

        border: 1px solid ${({ theme }) => theme['green-300']};
        border-radius: 6px;
        background: transparent;

        &:not(:disabled):hover {
            color: ${({ theme }) => theme.white};
            border-color: ${({ theme }) => theme['green-500']};
            background: ${({ theme }) => theme['green-500']};

            transition: background-color 0.2s, color 0.2s, border-color 0.2s;
        }

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        @media (max-width: 768px) {
            span {
                display: none;
            }
        }
    }
`;
