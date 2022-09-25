import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    channelSelected: {
        id: null,
        name: null,
        description: null,
        messages: [],
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
        setMessages: (state, action) => {
            if (state.channelSelected.id) {
                state.channelSelected.messages = action.payload.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
            }
        },
        clearMessages: (state) => {
            state.channelSelected.messages = [];
        },
    },
});

export const { setChannelInfo, setChannels, setMessages, clearMessages } =
    channelSlice.actions;

export default channelSlice.reducer;
