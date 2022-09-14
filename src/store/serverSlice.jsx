import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    serverSelected: {
        id: null,
        name: null,
        avatar: null,
    },
    servers: [],
    members: [],
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
            const payload = action.payload;
            if (payload instanceof Array && payload.length > 0)
                state.servers = payload.sort((a, b) => a.name.localeCompare(b.name));
        },
        setMembers: (state, action) => {
            const payload = action.payload;
            if (payload instanceof Array && payload.length > 0)
                state.members = payload.sort((a, b) => a.name.localeCompare(b.name));
        },
    },
});

export const { setServerInfo, setServers, setMembers } = serverSlice.actions;

export default serverSlice.reducer;
