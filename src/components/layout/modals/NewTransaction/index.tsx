import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Overlay, Content, CloseButton } from './style';
import { X } from 'phosphor-react';

export const NewTransactionModal: FC = () => {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form>
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    );
};
