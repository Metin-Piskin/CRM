import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setauth: (state, action) => {
            state.auth = action.payload;
        },
    },
});

export const { setauth } = authSlice.actions;
export default authSlice.reducer