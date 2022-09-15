import { createSlice } from '@reduxjs/toolkit';

const fakeMessages = [
    {
        id: 1,
        content: 'Bonjour tout le monde',
        date: '2022-07-31T12:14:12.000Z',
        username: 'Fethi',
        avatar: 'https://cdn.discordapp.com/avatars/262619343618179072/6bc41d3a6f972f377b99452431ba6557.webp?size=80',
    },
    {
        id: 2,
        content: 'Bijour',
        date: '2022-08-01T12:14:13.000Z',
        username: 'Jovany',
        avatar: 'https://cdn.discordapp.com/avatars/263155833934708736/6efb7f7a0bfa437055dc683a73f252ff.webp?size=80',
    },
    {
        id: 3,
        content: 'Heyo :3',
        date: '2022-08-01T12:14:18.000Z',
        username: 'Peter',
        avatar: 'https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=80',
    },
    {
        id: 4,
        content: 'Hewo :B',
        date: '2022-08-01T12:14:21.000Z',
        username: 'Marine',
        avatar: '',
    },
    {
        id: 5,
        content: 'Bonjour tout le monde',
        date: '2022-08-31T12:14:12.000Z',
        username: 'Fethi',
        avatar: 'https://cdn.discordapp.com/avatars/262619343618179072/6bc41d3a6f972f377b99452431ba6557.webp?size=80',
    },
    {
        id: 6,
        content: 'Bijour',
        date: '2022-09-01T12:14:13.000Z',
        username: 'Jovany',
        avatar: 'https://cdn.discordapp.com/avatars/263155833934708736/6efb7f7a0bfa437055dc683a73f252ff.webp?size=80',
    },
    {
        id: 7,
        content: 'Heyo :3',
        date: '2022-09-01T12:14:18.000Z',
        username: 'Peter',
        avatar: 'https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=80',
    },
    {
        id: 8,
        content: 'Hewo :B',
        date: '2022-09-01T12:14:21.000Z',
        username: 'Marine',
        avatar: '',
    },
    {
        id: 9,
        content: 'Bonjour tout le monde',
        date: '2022-09-31T12:14:12.000Z',
        username: 'Fethi',
        avatar: 'https://cdn.discordapp.com/avatars/262619343618179072/6bc41d3a6f972f377b99452431ba6557.webp?size=80',
    },
    {
        id: 10,
        content: 'Bijour',
        date: '2022-10-01T12:14:13.000Z',
        username: 'Jovany',
        avatar: 'https://cdn.discordapp.com/avatars/263155833934708736/6efb7f7a0bfa437055dc683a73f252ff.webp?size=80',
    },
    {
        id: 11,
        content: 'Heyo :3',
        date: '2022-10-01T12:14:18.000Z',
        username: 'Peter',
        avatar: 'https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=80',
    },
    {
        id: 12,
        content: 'Hewo :B',
        date: '2022-10-01T12:14:21.000Z',
        username: 'Marine',
        avatar: '',
    },
    {
        id: 13,
        content: 'Bonjour tout le monde',
        date: '2022-10-31T12:14:12.000Z',
        username: 'Fethi',
        avatar: 'https://cdn.discordapp.com/avatars/262619343618179072/6bc41d3a6f972f377b99452431ba6557.webp?size=80',
    },
    {
        id: 14,
        content: 'Bijour',
        date: '2022-11-01T12:14:13.000Z',
        username: 'Jovany',
        avatar: 'https://cdn.discordapp.com/avatars/263155833934708736/6efb7f7a0bfa437055dc683a73f252ff.webp?size=80',
    },
    {
        id: 15,
        content: 'Heyo :3',
        date: '2022-11-01T12:14:18.000Z',
        username: 'Peter',
        avatar: 'https://cdn.discordapp.com/avatars/306033777669308416/9fdf2b63b258f0de00f691eb9f623141.webp?size=80',
    },
    {
        id: 16,
        content: 'Hewo :B',
        date: '2022-11-01T12:14:21.000Z',
        username: 'Marine',
        avatar: '',
    },
];

const initialState = {
    channelSelected: {
        id: null,
        name: null,
        description: null,
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
