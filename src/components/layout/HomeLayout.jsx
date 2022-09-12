import { Outlet } from 'react-router-dom';

import Header from '../home/Header';

const HomeLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default HomeLayout;
