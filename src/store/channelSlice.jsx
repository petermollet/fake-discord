import { createSlice } from '@reduxjs/toolkit';

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
