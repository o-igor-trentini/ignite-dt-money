import { FC } from 'react';
import { Header } from '../../components/layout/Header';
import { Summary } from '../../components/layout/Summary';

export const Transactions: FC = () => {
    return (
        <div>
            <Header />

            <Summary />
        </div>
    );
};
