import type { UserAction, UserState } from "../../Types/userTypes";



export const initialUserState: UserState = {
  cliente: null,
  reservas: null,
  error:null,
  loading:true,
  personal:null
};

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "SET_CLIENTE":
      return { ...state, cliente: action.payload,loading:false };

    case "SET_RESERVAS":
      return { ...state, reservas: action.payload,loading:false };
      
      case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };

    case "SET_PERSONAL":
       return { ...state, personal: action.payload,loading:false };

    case "SET_LOADING":
      return { ...state, loading: true,error:null };

    default:
      return state;
  }
}
