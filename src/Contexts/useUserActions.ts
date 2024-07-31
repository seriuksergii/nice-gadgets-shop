import { useContext } from "react";
import { TypeUserActionContext, UserActionContext } from "./UserActionContext";


export const useUserActions = (): TypeUserActionContext => useContext(UserActionContext);