// ** main file for setting up app store
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./root-reducer";

// ** entry point of the app store
export default configureStore({
  reducer,
});

// ** your task is to setup redux.js store here
