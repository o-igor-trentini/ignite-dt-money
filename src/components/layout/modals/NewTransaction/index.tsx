import { FC, useContext } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../../../contexts/Transactions';

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export const NewTransactionModal: FC = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income',
        },
    });
    const { createTransaction } = useContext(TransactionsContext);

    const handleCreateNewTransaction = async ({ description, price, category, type }: NewTransactionFormInputs) => {
        createTransaction({ description, price, category, type }).then();

        reset();
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

                    <Controller
                        control={control}
                        render={({ field }) => (
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton type="button" variant="income" value="income">
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TransactionTypeButton>

                                <TransactionTypeButton type="button" variant="outcome" value="outcome">
                                    <ArrowCircleDown size={24} />
                                    Saída
                                </TransactionTypeButton>
                            </TransactionType>
                        )}
                        name="type"
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    );
};
