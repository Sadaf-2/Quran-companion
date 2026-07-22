import { createSlice } from "@reduxjs/toolkit";

const savedFavorites =
  JSON.parse(localStorage.getItem("favoriteDuas")) || [];

const initialState = {
  items: savedFavorites,
};

const favoriteSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    addFavorite: (state, action) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);

        localStorage.setItem(
          "favoriteDuas",
          JSON.stringify(state.items)
        );
      }
    },

    removeFavorite: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "favoriteDuas",
        JSON.stringify(state.items)
      );
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;