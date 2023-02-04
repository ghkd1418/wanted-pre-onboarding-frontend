import { api } from "./index";
import { IUserInfo } from "../type/IAuth";

export const AuthApi = {
  SignUp(data: IUserInfo) {
    return api.post("/auth/signup", data);
  },
  SignIn(data: IUserInfo) {
    return api.post("/auth/signin", data);
  },
};
