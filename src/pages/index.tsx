import { NextPage } from 'next';
import Landing from 'pages/Landing';
import { AuthProvider } from '../context/AuthContext'

const Home: NextPage = () => {
    return (
    <AuthProvider>
        <Landing />
    </AuthProvider>

    )
};

export default Home;
