import { createSlice } from "@reduxjs/toolkit"

const filterInitialState = { value: '' }

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        state.value = action.payload
      },
      prepare(value) {
        return {
          payload: value
        }
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;