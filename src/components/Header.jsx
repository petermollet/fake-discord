import { Bars3Icon } from '@heroicons/react/24/solid';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { auth, provider } from '../../firebase';
import { ReactComponent as Logo } from '../assets/discord-logo.svg';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const redirect = () => navigate('/chanels');

    const handleLogin = (e) => {
        e.preventDefault();
        if (user) {
            redirect();
        } else {
            signInWithPopup(auth, provider)
                .then(() => redirect())
                .catch((error) => alert(error.message));
        }
    };

    return (
        <header className="flex items-center justify-between bg-discord-blue py-4 px-6">
            <a href="/">
                <Logo className="w-24 text-white lg:h-12 lg:w-32" />
            </a>

            <div className="hidden space-x-6 text-white lg:flex">
                <Link to="/" className="link">
                    Download
                </Link>
                <Link to="/" className="link">
                    Why Discord
                </Link>
                <Link to="/" className="link">
                    Nitro
                </Link>
                <Link to="/" className="link">
                    Safety
                </Link>
                <Link to="/" className="link">
                    Support
                </Link>
            </div>

            <div className="flex space-x-4">
                <button
                    onClick={handleLogin}
                    className="btn-white px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm"
                >
                    {user ? 'Open Discord' : 'Login'}
                </button>
                <Bars3Icon className="h-8 cursor-pointer text-white lg:hidden lg:h-9" />
            </div>
        </header>
    );
};

export default Header;
