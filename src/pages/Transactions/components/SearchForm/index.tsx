import { FC, memo } from 'react';
import { SearchFormContainer } from './style';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../../../contexts/Transactions';
import { useContextSelector } from 'use-context-selector';

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

const SearchFormComponent: FC = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    });
    const getTransactions = useContextSelector(TransactionsContext, (contenxt) => contenxt.getTransactions);

    const handleSearchTransactions = async ({ query }: SearchFormInputs) => {
        await getTransactions(query);
    };

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" placeholder="Busque por transações" autoComplete="off" {...register('query')} />

            <button disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                <span>Buscar</span>
            </button>
        </SearchFormContainer>
    );
};

export const SearchForm = memo(SearchFormComponent);
