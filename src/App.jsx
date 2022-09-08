import { BrowserRouter, Route, Routes as RoutesContainer } from 'react-router-dom';

import OutletMenu from './components/OutletMenu';
import ChannelView from './views/ChannelView';
import HomeView from './views/HomeView';

const App = () => {
    return (
        <BrowserRouter>
            <div className="h-full">
                <RoutesContainer>
                    <Route path="/" element={<OutletMenu />}>
                        <Route index element={<HomeView />} />
                    </Route>
                    <Route path="/channels" element={<ChannelView />} />
                </RoutesContainer>
            </div>
        </BrowserRouter>
    );
};

export default App;
