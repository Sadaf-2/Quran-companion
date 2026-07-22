import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
} from "redux-persist";

import favoriteReducer from "../features/favorites/favoriteSlice";
import profileReducer from "../features/profile/profileSlice";
import authReducer from "../features/auth/authSlice";


// custom local storage
const storage = {
  getItem: (key) => {
    return Promise.resolve(localStorage.getItem(key));
  },

  setItem: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },

  removeItem: (key) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};


// Favorites persist config
const favoritePersistConfig = {
  key: "favorites",
  storage,
};


const persistedFavoriteReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer
);


// Store
export const store = configureStore({
  reducer: {
    favorites: persistedFavoriteReducer,
    profile: profileReducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);