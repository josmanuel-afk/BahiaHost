    import { useReducer, type ReactNode } from "react";
    import { UserContext } from "./userContext";
import { initialUserState, userReducer } from "./reducers/userReducers";

    export const UserProvider = ({ children }: { children: ReactNode }) => {


     const [state, dispatch] = useReducer(userReducer, initialUserState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
        {children}
        </UserContext.Provider>
    );
    };



