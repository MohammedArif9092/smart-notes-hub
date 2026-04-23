import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: [],
  },
  reducers: {
    setNotes: (state, action) => {
      state.notesList = action.payload;
    },
  },
});

export const { setNotes } = notesSlice.actions;
export default notesSlice.reducer;