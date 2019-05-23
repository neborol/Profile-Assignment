import { Component, Input, ViewChild, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileItem } from '../../Store/models/ProfileItem';
import { IProfileItem } from './../../Store/models/IProfileItem';
import { trimInput } from './../../sharedUtility/trimUtility';
import { ProfileService } from './../../profileService';
import { IUserState } from 'src/app/Store/models/InitialUserState';
import { Observable } from 'rxjs';
import { EProfileActions } from 'src/app/Store/actions/ProfileActions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('psf') searchProfileForm: NgForm; // References the profile search form
  filteredProfiles: IProfileItem[];
  canInputQuery = false;
  searchQueryString = '';
  showWarningAlert = false;
  filterCategory = 'firstName'; // Preselect filtering by firstName as the default
  queryCount = 0;
  firtstChar = '';
  screenForArt = false;
  preSearchQueryString = '';
  showDetailsInTextarea = false;
  currentProfile: IProfileItem = null;
  alertArtSymbolRequired = false;
  storeData$: Observable<IUserState>;

  constructor(private pServ: ProfileService) { }

  ngOnInit() {
    this.storeData$ = this.pServ.getAllUsersHandle();
  }

  // Initial search functionality that takes the @ character and then toggles the real
  // search input with the @ character
  preSearchQueryInput(el) {
    if (el.value.includes('@') && el.value.charAt(0) === '@') {
      this.searchQueryString = el.value.replace('@', '');
      this.screenForArt = true;
      this.alertArtSymbolRequired = false;
    } else {
      this.alertArtSymbolRequired = true;
    }
  }

  // Toggle the proper search input element, whether regular or with @
  returnControl() {
    this.screenForArt = false;
  }

  // On keydown, use the filter category and filter the profiles available in the redux store
  searchQueryInput() {
    this.searchQueryString = trimInput(this.searchQueryString);
    const regex1 = new RegExp('^' + this.searchQueryString, 'i');
    const regex2 = new RegExp(' ' + this.searchQueryString, 'ig');

    this.storeData$.subscribe((profile: any) => {
      this.filteredProfiles = (profile).filter((userItem: ProfileItem) => {
        return regex1.test(userItem[this.searchProfileForm.value.filterCategory]) ||
        regex2.test(userItem[this.searchProfileForm.value.filterCategory]);
      });

      this.showWarningAlert = this.filteredProfiles.length === 0 ? true : false;
      if (this.filteredProfiles.length === 0) {
          this.filteredProfiles = profile.users;
      }
    });
  }

  // Take a profile object and set it's showDetails property to true and display the details in a textarea box.
  displayProfileDetailFromList(profileToDisplay) {
    this.pServ.dispatchTextAreaToStore({type: EProfileActions.UpdateProfile, payload: profileToDisplay});
  }

}
