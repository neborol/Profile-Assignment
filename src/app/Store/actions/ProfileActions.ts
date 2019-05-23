import { Action} from 'redux';

// Actions to be used as custom event listeners, setup this way to avoid accidental errors through typos.
export enum EProfileActions {
  UpdateProfiles = '[User] Get profiles',
  UpdateProfile = '[User] Get profile'
}

// Action creator classes for better management of actions
export class UpdateProfiles implements Action {
  public readonly type = EProfileActions.UpdateProfiles;
  constructor(public payload: any) {}
}
export class UpdateProfile implements Action {
  public readonly type = EProfileActions.UpdateProfile;
  constructor(public payload: any) {}
}


// Dynamic export of all actions through the 'ProfileActions' key word.
export type ProfileActions = UpdateProfiles | UpdateProfile;
