// UserContext.tsx
import  { createContext,} from 'react';
import { initialUserState } from './reducers/userReducers';


  export const UserContext = createContext({
  state: initialUserState,
  dispatch: (action: any) => {},
  })
