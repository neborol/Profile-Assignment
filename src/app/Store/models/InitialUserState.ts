import { IProfileItem } from './IProfileItem';
import Dummydata from '../../../assets/dummyProfileData';
import { ProfileItem } from './ProfileItem';

// Strong type interface for strong typing and solid non-brittle code.
export interface IUserState {
    users: IProfileItem[];
    selectedUser: ProfileItem;
}

// Setup of the initial state by loading some dummy data from a .JSON file in the assets foler.
export const initialUserState: IUserState = {
    users: [...Dummydata],
    selectedUser: {
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'female',
        role: 'Coordinator',
        avatarLink: 'female-avatar.jpg',
        showDetails: false
    }
};

