import { FC } from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './style';
import logoSvg from '../../../assets/logo.svg';
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from '../modals/NewTransaction';

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoSvg} alt="" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    );
};
