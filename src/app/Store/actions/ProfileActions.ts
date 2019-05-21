import { Action} from 'redux';

// Actions to be used as custom event listeners, setup this way to avoid accidental errors through typos.
export enum EProfileActions {
  GetProfiles = '[User] Get profiles',
  GetProfile = '[User] Get profile'
}

// Action creator classes for better management of actions
export class GetProfiles implements Action {
  public readonly type = EProfileActions.GetProfiles;
  constructor(public payload: any) {}
}
export class GetProfile implements Action {
  public readonly type = EProfileActions.GetProfile;
  constructor(public payload: any) {}
}


// Dynamic export of all actions through the 'ProfileActions' key word.
export type ProfileActions = GetProfiles | GetProfile;
