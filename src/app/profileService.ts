import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgRedux, select } from '@angular-redux/store';
import { IProfileItem } from './Store/models/IProfileItem';
import { IUserState } from './Store/models/InitialUserState';


@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    currentState: IProfileItem;

    // Automatically extract the users from the redux store and make available in the template as '(users | async)'
    @select(['users']) users$: Observable<IUserState>;

    // Automatically extract the users from the redux store and make available in the template as '(users | async)'
    @select(['selectedUser']) selectedUser$: Observable<IProfileItem>;

    // Dependency injection of the Redux library
    constructor(private ngRedux: NgRedux<any>) {}

    // Get the users$ data array, extracted by the redux store and return it to interested Components
    getAllUsersHandle() {
        return this.users$;
    }

    // Get the currently selectedUser$ data extracted by the redux store and return it to the textArea Components
    getCurrentSelectedUserHandle() {
        return this.selectedUser$;
    }

    dispatchTextAreaToStore(dispatchConfig) {
        this.ngRedux.dispatch(dispatchConfig);
    }
}
