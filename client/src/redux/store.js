import {  configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
// import {  persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const rootReducer = combineReducers({ user: userReducer });

// const persistConfig = {
//   key: "root",
//   storage,
//   version: 1,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {userReducer},
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});

// export const persistor = persistStore(store);
