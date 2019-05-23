import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ProfileService } from 'src/app/profileService';
import { NgRedux } from '@angular-redux/store';
import { ProfileItem } from 'src/app/Store/models/ProfileItem';
import { EProfileActions } from 'src/app/Store/actions/ProfileActions';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @ViewChild('firstN') firstN: ElementRef;
  @ViewChild('lastN') lastN: ElementRef;
  @ViewChild('gend') gend: ElementRef;
  @ViewChild('rol') rol: ElementRef;
  @ViewChild('moddal') moddal: ElementRef;

  stateSelectedUser: ProfileItem;
  safeToStoreData = true;

  aNRegex = /^[a-z0-9 ]+$/i;

  constructor(private proServ: ProfileService, private ngRedux: NgRedux<any> ) { }

  ngOnInit() {
    this.proServ.getCurrentSelectedUserHandle().subscribe((x) => {
       this.stateSelectedUser = this.ngRedux.getState().selectedUser;
    });
  }

    // Validate all the user inputs to make sure that they don't contain anything malitious.
    validateUserInputEntries(entry) {
      Object.keys(entry).forEach(key => {
        if (!this.aNRegex.test(entry[key].trim())) {
          this.safeToStoreData = false;
          return false;
        }
      });


    }

  saveCurrentProfileToStore() {
    const profileToSave = {
      firstName: this.firstN.nativeElement.textContent,
      lastName: this.lastN.nativeElement.textContent,
      gender: this.gend.nativeElement.textContent,
      role: this.rol.nativeElement.textContent
    };

    // validate user input
    this.validateUserInputEntries(profileToSave);

    profileToSave['avatarLink'] = profileToSave.gender === 'male' ? 'male-avatar.jpg' : 'female-avatar.jpg';
    profileToSave['showDetails'] = false;


    if (this.safeToStoreData) {
      this.proServ.dispatchTextAreaToStore({type: EProfileActions.UpdateProfiles, payload: profileToSave});
      this.proServ.dispatchTextAreaToStore({type: EProfileActions.UpdateProfile, payload: profileToSave});
    }

  }
}


