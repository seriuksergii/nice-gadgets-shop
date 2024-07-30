import { createContext, Dispatch} from "react";
import { UserAction } from "../types/UserAction";
import { Action} from "./reduser";

export interface TypeUserActionContext {
  userAction: UserAction,
  dispatch?: Dispatch<Action>,
}


export const initialState: UserAction = {
  cart: [],
  favorites: []
};

export const UserActionContext = createContext<TypeUserActionContext>({
  userAction: initialState,
});