import { IProfileItem } from './IProfileItem';
import Dummydata from '../../../assets/dummyProfileData';

// Strong type interface for strong typing and solid non-brittle code.
export interface IUserState {
    users: IProfileItem[];
}

// Setup of the initial state by loading some dummy data from a .JSON file in the assets foler.
export const initialUserState: IUserState = {
    users: [...Dummydata]
};

