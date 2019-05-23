import { Component, ViewChild, OnInit} from '@angular/core';
import { ProfileItem } from '../../Store/models/ProfileItem';
import { NgForm } from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { IUserState } from 'src/app/Store/models/InitialUserState';
import { EProfileActions } from '../../Store/actions/ProfileActions';
import { Router, ActivatedRoute } from '@angular/router';
import { trimInput } from './../../sharedUtility/trimUtility';
import { ProfileService } from 'src/app/profileService';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  isSearchProfile = false;
  showStoreProfiles = false;
  toggleShowStoreSnapshotButtonText = 'View Store Snapshot';
  firstNameInValid = false;
  lastNameInValid = false;
  roleInValid = false;
  profileCreationFormValid = false;
  aNRegex = /^[a-z0-9 ]+$/i;
  storeData;
 // Reference the profile creation form from the template
  @ViewChild('pcf') createProfileForm: NgForm;

  // // Automatically extract the users from the redux store and make available in the template as '(users | async)'
  // @select(['users']) users$: Observable<IUserState>;

  // Dependency injection of the Redux library
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private ngRedux: NgRedux<any>,
    private profileServ: ProfileService,
  ) {
  }

  ngOnInit() {
    this.storeData = this.profileServ.getAllUsersHandle();
  }

  // Validate the first name input
  validateFirstName(entry) {
    if (entry.value && this.aNRegex.test(entry.value)) {
      this.firstNameInValid = false;
    } else { this.firstNameInValid = true; }
  }

   // Validate the last name input
  validateLastName(entry) {
    if (entry.value && this.aNRegex.test(entry.value)) {
      this.lastNameInValid = false;
    } else { this.lastNameInValid = true; }
  }

   // Validate the role input
  validateRole(entry) {
    if (entry.value && this.aNRegex.test(entry.value)) {
      this.roleInValid = false;
    } else { this.roleInValid = true; }
  }

  // This method is executed when the profile creation form is submitted
  onProfileCreationFormSubmit() {
    const profileData = {
      firstName: trimInput(this.createProfileForm.value.firstName),
      lastName: trimInput(this.createProfileForm.value.lastName),
      gender: trimInput(this.createProfileForm.value.gender),
      role: trimInput(this.createProfileForm.value.role),
    };

    // An instance of the profile object is created and passed to ProfileItem constructor to be used to create individual profiles.
    const user = new ProfileItem(profileData);

    // Verify if the form input fields are properly validated, if so, dispatch an
    // action to the userReducer and send the created user/profile
    if (!this.firstNameInValid && !this.lastNameInValid && !this.roleInValid) {
      this.ngRedux.dispatch({type: EProfileActions.UpdateProfiles, payload: user});
      this.profileCreationFormValid = true;
      this.createProfileForm.reset();
      this.router.navigate(['/list'], {relativeTo: this.route});
    } else {
      this.profileCreationFormValid = false;
    }
  }



  // This method gets executed in order to toggle between the profile-creation page and the search-query page.
  toggleSearchOrCreateProfile() {
    this.isSearchProfile = !this.isSearchProfile;
  }

}
