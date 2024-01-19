import UserActionTypes from "./action-types";

export const loginUser = (name, email) => ({
  type: UserActionTypes.LOGIN,
  payload: { name, email },
})

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
})