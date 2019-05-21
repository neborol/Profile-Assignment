// Setup and creation of the Redux store, passing in the userReducer and the initial state.
import {createStore, Store} from 'redux';
import { IUserState, initialUserState } from './models/InitialUserState';
import { userReducer } from './reducers/userReducer';

export const store: Store<IUserState> = createStore(userReducer, initialUserState);
