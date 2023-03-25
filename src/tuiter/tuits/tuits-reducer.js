import { createSlice } from '@reduxjs/toolkit';
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        addTuit: (state, action) => {
            state.unshift({
                ...action.payload,
                _id: Math.random().toString(36),
             })
        },
        deleteTuit: (state, action) => {
            var index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const { addTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;