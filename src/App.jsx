import {
    BrowserRouter,
    Navigate,
    Route,
    Routes as RoutesContainer,
} from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';
import HomeLayout from './components/layout/HomeLayout';
import * as URL from './constants/url';
import HomeView from './views/HomeView';
import PrivateMessageView from './views/PrivateMessageView';
import ServerView from './views/ServerView';

const App = () => {
    return (
        <BrowserRouter>
            <div className="h-screen w-screen">
                <RoutesContainer>
                    <Route path={URL.URL_HOME} element={<HomeLayout />}>
                        <Route index element={<HomeView />} />
                    </Route>
                    <Route path={URL.URL_SERVER} element={<AppLayout />}>
                        <Route path={URL.URL_ME} element={<PrivateMessageView />} />
                        <Route
                            path={`${URL.URL_SERVER}/:${URL.URL_SERVER_ID}/:${URL.URL_CHANNEL_ID}`}
                            element={<ServerView />}
                        />
                        <Route
                            path={`${URL.URL_SERVER}/:${URL.URL_SERVER_ID}`}
                            element={<ServerView />}
                        />
                        <Route
                            path={URL.URL_SERVER}
                            element={<Navigate to={URL.URL_ME} replace />}
                        />
                    </Route>
                </RoutesContainer>
            </div>
        </BrowserRouter>
    );
};

export default App;
