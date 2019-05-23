import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Observable} from 'rxjs';
import { IUserState } from 'src/app/Store/models/InitialUserState';
import { IProfileItem } from 'src/app/Store/models/IProfileItem';
import { ProfileService } from '../../profileService';
import { ProfileItem } from 'src/app/Store/models/ProfileItem';
import { EProfileActions } from '../../Store/actions/ProfileActions';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // Automatically extract the users from the redux store and make available in the template as '(users | async)'
  //  @select(['users']) users$: Observable<IUserState>;
  stateUsers$: Observable<IUserState>;
  currentProfile: ProfileItem;

  // Dependency injection of the Redux library
  constructor(private ps: ProfileService, private ngRedux: NgRedux<IProfileItem>) {
  }

  ngOnInit() {
    this.stateUsers$ = this.ps.getAllUsersHandle();
  }

  displayProfileDetailFromList(profileToDisplay) {
    this.ps.dispatchTextAreaToStore({type: EProfileActions.UpdateProfile, payload: profileToDisplay});
  }
}
