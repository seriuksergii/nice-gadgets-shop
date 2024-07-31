import React, { useEffect, useReducer } from "react";
import { ActionTypes, userActionReducer } from "./reduser";
import { initialState, UserActionContext } from "./UserActionContext";

 
interface Props {
  children: React.ReactNode;
};


export const ActionUserProvider: React.FC<Props> = ({ children }) => {
  const [userAction, dispatch] = useReducer(userActionReducer, initialState);

  useEffect(() => {
    dispatch({ type: ActionTypes.onGet });
  }, []);

  return (
    <UserActionContext.Provider value={{ userAction, dispatch }}>
      {children}
    </UserActionContext.Provider>
  );
};