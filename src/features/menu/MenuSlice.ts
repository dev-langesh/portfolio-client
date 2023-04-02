import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/app/store";

interface menuState {
  value: boolean;
}

const initialState: menuState = {
  value: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.value = true;
    },

    closeMenu: (state) => {
      state.value = false;
    },
  },
});

export const { closeMenu, openMenu } = menuSlice.actions;

export const selectMenu = (state: RootState) => state.menu.value;

export default menuSlice.reducer;
