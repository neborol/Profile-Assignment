import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create-profile/create.component';
import { SearchComponent } from './components/search-profile/search.component';
import { userReducer } from './Store/reducers/userReducer';
import { IUserState } from './Store/models/InitialUserState';
import { initialUserState } from './Store/models/InitialUserState';

// The App module that serves as the only module that wires up all the inbuilt and
// 3rd party modules with the custom components of this app.
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IUserState>) {
    ngRedux.configureStore(userReducer, initialUserState, [createLogger()]);
  }
}
