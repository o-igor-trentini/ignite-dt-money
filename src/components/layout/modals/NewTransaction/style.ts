import * as Dialog from '@radix-ui/react-dialog';
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
            height: 58px;
            margin-top: 1.5rem;

            color: ${({ theme }) => theme.white};
            font-weight: bold;
            padding: 0 1.25rem;

            border: 0;
            border-radius: 6px;
            background: ${({ theme }) => theme['green-500']};
            cursor: pointer;

            &:hover {
                background: ${({ theme }) => theme['green-700']};
                transition: background-color 0.2s;
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
