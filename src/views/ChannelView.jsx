import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

import SideBarApp from "../components/SideBarApp";

const ChannelView = () => {
  const [user, loading] = useAuthState(auth);
  console.log(loading);
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" />;

  return (
    <div>
      <SideBarApp />
    </div>
  );
};

export default ChannelView;
