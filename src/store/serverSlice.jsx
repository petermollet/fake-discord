import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    serverSelected: {
        id: null,
        name: null,
        avatar: null,
    },
    servers: [],
};

const serverSlice = createSlice({
    name: 'server',
    initialState,
    reducers: {
        setServerInfo: (state, action) => {
            state.serverSelected.id = action.payload.id;
            state.serverSelected.name = action.payload.name;
            state.serverSelected.avatar = action.payload.avatar;
        },
        setServers: (state, action) => {
            state.servers = action.payload;
        },
    },
});

export const { setServerInfo, setServers } = serverSlice.actions;

export default serverSlice.reducer;
