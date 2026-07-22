import { createSlice } from "@reduxjs/toolkit";


const initialState = {

  name: "",
  email: "",
  bio: "",

};



const profileSlice = createSlice({

  name: "profile",

  initialState,


  reducers: {


    updateProfile: (state, action) => {

      state.name = action.payload.name;

      state.email = action.payload.email;

      state.bio = action.payload.bio;

    },


  },


});



export const { updateProfile } = profileSlice.actions;


export default profileSlice.reducer;