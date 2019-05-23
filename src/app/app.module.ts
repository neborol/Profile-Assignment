import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create-profile/create.component';
import { SearchComponent } from './components/search-profile/search.component';
import { userReducer } from './Store/reducers/userReducer';
import { IUserState } from './Store/models/InitialUserState';
import { initialUserState } from './Store/models/InitialUserState';
import { DisplayComponent } from './components/display/display.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListComponent } from './components/list/list.component';
import { TextareaComponent } from './components/textarea/textarea.component';


// The App module that serves as the only module that wires up all the inbuilt and
// 3rd party modules with the custom components of this app.
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent,
    DisplayComponent,
    PageNotFoundComponent,
    ListComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IUserState>) {
    ngRedux.configureStore(userReducer, initialUserState, [createLogger()]);
  }
}
