import { FC } from 'react';
import { HeaderContainer, HeaderContent, NewTransactionButton } from './style';
import logoSvg from '../../../assets/logo.svg';

export const Header: FC = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoSvg} alt="" />

                <NewTransactionButton>Nova Transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    );
};
