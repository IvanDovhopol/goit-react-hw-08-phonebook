import { successLoginToast, successRegisterToast } from 'constans/utils';

export const registerFulfilled = (_, action) => {
  const user = action.payload.user;
  successRegisterToast(user.name, user.email);
};

export const loginFulfilled = (_, action) => {
  const user = action.payload.user;
  successLoginToast(user.name, user.email);
};

export const logOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshUserPending = state => {
  state.isRefreshing = true;
};

export const refreshUserFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const refreshUserRejected = state => {
  state.isRefreshing = false;
};

export const anyPending = state => {
  state.isLoading = true;
  state.error = false;
};

export const anyFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = state => {
  state.isLoading = false;
  state.error = true;
};
