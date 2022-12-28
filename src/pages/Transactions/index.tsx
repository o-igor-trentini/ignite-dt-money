import { FC, useEffect, useState } from 'react';
import { Header } from '../../components/layout/Header';
import { Summary } from '../../components/layout/Summary';
import { Container, TransactionsContainer } from './style';
import { SearchForm } from './components/SearchForm';
import { TransactionsTable } from './components/TransactionsTable';
import { TransactionsCards } from './components/TransactionsCards';

export const Transactions: FC = () => {
    const [component, setComponent] = useState<JSX.Element>(<TransactionsTable />);

    useEffect(() => {
        if (document.documentElement.scrollWidth <= 768) {
            setComponent(<TransactionsCards />);
            return;
        }

        setComponent(<TransactionsTable />);
    }, []);

    return (
        <Container>
            <Header />

            <Summary />

            <TransactionsContainer>
                <SearchForm />

                {component}
            </TransactionsContainer>
        </Container>
    );
};
