import { BrowserRouter, Route, Routes as RoutesContainer } from 'react-router-dom';

import OutletMenu from './components/OutletMenu';
import ChanelView from './views/ChanelView';
import HomeView from './views/HomeView';

const App = () => {
    return (
        <BrowserRouter>
            <div className="h-full">
                <RoutesContainer>
                    <Route path="/" element={<OutletMenu />}>
                        <Route index element={<HomeView />} />
                    </Route>
                    <Route path="/chanels" element={<ChanelView />} />
                    <Route path="/chanels/:id" element={<ChanelView />} />
                </RoutesContainer>
            </div>
        </BrowserRouter>
    );
};

export default App;
