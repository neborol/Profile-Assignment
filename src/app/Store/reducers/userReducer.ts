import { EProfileActions } from '../actions/ProfileActions';
import { ProfileActions } from '../actions/ProfileActions';
import { initialUserState, IUserState } from '../models/InitialUserState';

// The userReducer, required by the redux store and makes decisions
// on what state to save in the store based on which action comes in.
export const userReducer = (
    state = initialUserState,
    action: ProfileActions
  ): IUserState => {
    switch (action.type) {
      case EProfileActions.GetProfiles:
        return {
          ...state,
          users: [...state.users, action.payload]
        };

      case EProfileActions.GetProfile: {
        return {
          ...state,
          users: action.payload
        };
      }

      default: return state;
    }
  };
