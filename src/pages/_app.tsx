import AppProvider from 'hooks';
import { AppProps } from 'next/app';
import { GlobalStyle } from 'styles';
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>          
            <AppProvider>
                <AuthProvider>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </AuthProvider>
            </AppProvider>
        </>
    );
}

export default MyApp;
