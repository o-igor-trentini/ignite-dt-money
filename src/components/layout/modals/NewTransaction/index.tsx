import { FC } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<NewTransactionFormInputs>();

    const handleCreateNewTransaction = (values: NewTransactionFormInputs) => {
        console.log('### New Transaction form', values);
    };

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        required
                        autoComplete="off"
                        {...register('description')}
                    />

                    <input
                        type="number"
                        placeholder="Preço"
                        required
                        autoComplete="off"
                        {...register('price', { valueAsNumber: true })}
                    />

                    <input type="text" placeholder="Categoria" required autoComplete="off" {...register('category')} />

                    <TransactionType>
                        <TransactionTypeButton type="button" variant="income" value="income">
                            <ArrowCircleUp size={24} />
                            Entrada
                        </TransactionTypeButton>

                        <TransactionTypeButton type="button" variant="outcome" value="outcome">
                            <ArrowCircleDown size={24} />
                            Saída
                        </TransactionTypeButton>
                    </TransactionType>

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    );
};
