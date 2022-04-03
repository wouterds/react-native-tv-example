import { createSlice } from '@reduxjs/toolkit';

import { Channel, ChannelState } from './types';

const initialState: ChannelState = {
  data: [],
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setChannels(state: ChannelState, action: { payload: Channel[] }) {
      state.data = action.payload;
    },
  },
});

export const { setChannels } = slice.actions;
export const { reducer } = slice;
