import { Component, ViewChild } from '@angular/core';
import { ProfileItem } from './Profile.model';
import { NgForm } from '@angular/forms';
import Dummydata from '../../../assets/dummyProfileData';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  todoInput = '';
  totalCount = 0;
  remainingCount = 0;
  showErrorMessage = false;
  isSearchProfile = false;
  profiles: Array<ProfileItem> = [...Dummydata];

  @ViewChild('pcf') createProfileForm: NgForm;

  onProfileCreationFormSubmit() {
    const profileData = {
      firstName: this.createProfileForm.value.firstName,
      lastName: this.createProfileForm.value.lastName,
      gender: this.createProfileForm.value.gender,
      role: this.createProfileForm.value.role,
    };
    const user = new ProfileItem(profileData);
    this.profiles.push(user);
    this.createProfileForm.reset();
  }

  toggleProfileDetails(profile) {
    profile.showDetails = !profile.showDetails;
  }

  toggleSearchOrCreateProfile() {
    this.isSearchProfile = !this.isSearchProfile;
  }

  searchAProfile() {
    this.isSearchProfile = true;
  }

}
