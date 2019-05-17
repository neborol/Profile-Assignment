import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileItem } from '../create-profile/Profile.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() passedDownProfiles: ProfileItem[];
  @ViewChild('psf') searchProfileForm: NgForm;
  @ViewChild('queryI') queryI: ElementRef;
  filteredProfiles: Array<ProfileItem>;
  canInputQuery = false;
  searchQueryString = '';
  filterCategory = 'firstName'; // Preselect filtering by firstName as the default
  queryCount = 0;
  firtstChar = '';
  screenForArt = false;
  preSearchQueryString = '';

  constructor() { }

  preSearchQueryInput(el) {
    console.log(el.value);
    if (el.value.includes('@') && el.value.charAt(0) === '@') {
      this.searchQueryString = el.value.replace('@', '');
      this.screenForArt = true;
    }
  }

  returnControl() {
    this.screenForArt = false;
  }

  searchQueryInput() {
    let reg;
    reg = new RegExp('^' + this.searchQueryString, 'i');
    this.filteredProfiles = this.passedDownProfiles.filter((profile) => {
      return reg.test(profile[this.searchProfileForm.value.filterCategory]);
    });
  }

}
