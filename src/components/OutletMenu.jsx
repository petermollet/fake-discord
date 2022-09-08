import { Outlet } from "react-router-dom";

import Header from "./Header";

const OutletMenu = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default OutletMenu;
