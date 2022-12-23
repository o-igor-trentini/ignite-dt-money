import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { MainStyle } from './styles/main';

export const App: FC = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <MainStyle />

            <div>Hello World</div>
        </ThemeProvider>
    );
};
