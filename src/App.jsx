import {
  BrowserRouter,
  Routes as RoutesContainer,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import OutletMenu from "./components/OutletMenu";
import ChannelView from "./views/ChannelView";
import HomeView from "./views/HomeView";

const App = () => {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<OutletMenu />}>
          <Route index element={<HomeView />} />
        </Route>
        <Route path="/channels" element={<ChannelView />} />
        <Route path="/channels/:id" element={<ChannelView />} />
      </RoutesContainer>
    </BrowserRouter>
  );
};

export default App;
