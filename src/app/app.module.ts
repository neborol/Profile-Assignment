import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateComponent } from './components/create-profile/create.component';
import { SearchComponent } from './components/search-profile/search.component';
import { ProfilesFilter } from './profileFilter';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent,
    ProfilesFilter
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
