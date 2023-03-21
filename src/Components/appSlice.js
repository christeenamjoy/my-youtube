import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleSideBar: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.toggleSideBar = !state.toggleSideBar;
    },
    closeMenu: (state)=>{
        state.toggleSideBar = false;
    }
  },
});

export default appSlice.reducer;
export const { toggleSideBar ,closeMenu} = appSlice.actions;


