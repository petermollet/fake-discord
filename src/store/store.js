import { configureStore } from '@reduxjs/toolkit';

import channelReducer from './channelSlice';
import serverReducer from './serverSlice';

const store = configureStore({
    reducer: {
        channel: channelReducer,
        server: serverReducer,
    },
});

export default store;
