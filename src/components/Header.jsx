import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import { ReactComponent as Logo } from "../assets/discord-logo.svg";
import { auth, provider } from "../../firebase";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const redirect = () => navigate("/channels");

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
    <header className="bg-discord-blue flex items-center justify-between py-4 px-6">
      <a href="/">
        <Logo className="w-24 lg:w-32 lg:h-12 text-white" />
      </a>

      <div className="hidden lg:flex space-x-6 text-white">
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
          className="btn-white px-3 py-1 md:px-4 md:py-2 text-xs md:text-sm"
        >
          {user ? "Open Discord" : "Login"}
        </button>
        <Bars3Icon className="text-white h-8 lg:h-9 cursor-pointer lg:hidden" />
      </div>
    </header>
  );
};

export default Header;
