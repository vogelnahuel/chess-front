import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { listenerMiddleware } from "./listenerMiddleware";
import { LoginSlice } from "./slice/loginSlice";
    
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    login: LoginSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(      
      baseApi.middleware,
      listenerMiddleware.middleware,
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;