import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;

    background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    padding: 2.5rem 3rem;
    position: fixed;
    top: 50%;
    left: 50%;

    border-radius: 6px;
    background: ${({ theme }) => theme['gray-800']};
    transform: translate(-50%, -50%);

    form {
        width: 100%;
        margin-top: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        input {
            width: 100%;
            padding: 1rem;

            border-radius: 6px;
            border: 0;

            color: ${({ theme }) => theme['gray-300']};
            background: ${({ theme }) => theme['gray-900']};

            &::placeholder {
                color: ${({ theme }) => theme['gray-500']};
            }
        }

        button[type='submit'] {
            width: 100%;
            height: 58px;
            margin-top: 1.5rem;

            color: ${({ theme }) => theme.white};
            font-weight: bold;
            padding: 0 1.25rem;

            border: 0;
            border-radius: 6px;
            background: ${({ theme }) => theme['green-500']};
            cursor: pointer;
            transition: background-color 0.2s;

            &:not(:disabled):hover {
                background: ${({ theme }) => theme['green-700']};
            }

            &:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    line-height: 0;
    color: ${({ theme }) => theme['gray-500']};

    background: transparent;
    border: 0;

    cursor: pointer;
`;

export const TransactionType = styled(RadioGroup.Root)`
    width: 100%;
    margin-top: 1.5rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`;

type TransactionTypeButtonVariant = 'income' | 'outcome';

interface TransactionTypeButtonProps {
    variant: TransactionTypeButtonVariant;
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    color: ${({ theme }) => theme['gray-300']};

    border-radius: 6px;
    border: 0;
    background: ${({ theme }) => theme['gray-700']};
    cursor: pointer;
    transition: background-color 0.2s;

    svg {
        color: ${({ theme, variant }) => (variant === 'income' ? theme['green-300'] : theme['red-300'])};
    }

    &[data-state='unchecked'] {
        &:hover {
            background: ${({ theme }) => theme['gray-600']};
        }
    }

    &[data-state='checked'] {
        color: ${({ theme }) => theme.white};
        background: ${({ theme, variant }) => (variant === 'income' ? theme['green-500'] : theme['red-500'])};

        svg {
            color: ${({ theme }) => theme.white};
        }
    }
`;
