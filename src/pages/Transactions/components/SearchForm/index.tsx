import { FC } from 'react';
import { SearchFormContainer } from './style';
import { MagnifyingGlass } from 'phosphor-react';

export const SearchForm: FC = () => {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque por transações" />

            <button>
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    );
};
