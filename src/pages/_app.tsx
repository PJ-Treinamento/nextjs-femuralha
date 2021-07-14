import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
                <AppProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </AppProvider>
            </AuthProvider>
        </>
    );
}

export default MyApp;
