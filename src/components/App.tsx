import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/themes/default';
import { MainStyle } from '../styles/main';
import { Transactions } from '../pages/Transactions';

export const App: FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MainStyle />

            <Transactions />
        </ThemeProvider>
    );
};
