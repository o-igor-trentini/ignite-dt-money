import { FC } from 'react';
import { Header } from '../../components/layout/Header';
import { Summary } from '../../components/layout/Summary';
import { PriceHighlight, TransactionsContainer, Transactionstable } from './style';
import { SearchForm } from './components/SearchForm';

export const Transactions: FC = () => {
    return (
        <div>
            <Header />

            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <Transactionstable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">-R$ 12.000,00</PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>
                    </tbody>
                </Transactionstable>
            </TransactionsContainer>
        </div>
    );
};
