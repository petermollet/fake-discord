import { createSlice } from '@reduxjs/toolkit';

const fakeMembers = [
    {
        id: 1,
        name: 'Fethi',
        avatar: 'https://cdn.discordapp.com/avatars/262619343618179072/6bc41d3a6f972f377b99452431ba6557.webp?size=32',
    },
    {
        id: 2,
        name: 'Jovany',
        avatar: 'https://cdn.discordapp.com/avatars/263155833934708736/6efb7f7a0bfa437055dc683a73f252ff.webp?size=32',
    },
    {
        id: 3,
        name: 'Peter',
        avatar: 'https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=32',
    },
    { id: 4, name: 'Marine', avatar: null },
];

const fakeMessages = [
    {
        id: 1,
        content: 'Bonjour tout le monde',
        date: '2021-08-01T12:14:12.000Z',
        userId: 1,
    },
    {
        id: 2,
        content: 'Bijour',
        date: '2021-08-01T12:14:13.000Z',
        userId: 2,
    },
    {
        id: 3,
        content: 'Heyo :3',
        date: '2021-08-01T12:14:18.000Z',
        userId: 3,
    },
    {
        id: 4,
        content: 'Hewo :B',
        date: '2021-08-01T12:14:21.000Z',
        userId: 4,
    },
];

const initialState = {
    channelSelected: {
        id: null,
        name: null,
        description: null,
        members: fakeMembers,
        messages: fakeMessages,
    },
    channels: [],
};

const channelSlice = createSlice({
    name: 'channel',
    initialState,
    reducers: {
        setChannelInfo: (state, action) => {
            state.channelSelected.id = action.payload.id;
            state.channelSelected.name = action.payload.name;
        },
        setChannels: (state, action) => {
            state.channels = action.payload;
        },
    },
});

export const { setChannelInfo, setChannels } = channelSlice.actions;

export default channelSlice.reducer;
