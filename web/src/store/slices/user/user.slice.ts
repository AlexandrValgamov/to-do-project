import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./types";
import { mapUserData } from "@/enteties/user/mapping.api-to-app";
import { storage } from "@/storage";

const userDataInStore = storage.getUserData();

const initialState: IUserState = {
  isAuth: !!userDataInStore?.token,
  userData: userDataInStore?.token
    ? mapUserData(userDataInStore)
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: Draft<IUserState>, { payload }) => {
      state.userData = payload;
    },
    setIsAuth: (
      state: Draft<IUserState>,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isAuth = payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
