import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/routes/about.component';
import { DataMakersComponent } from './data-makers/data-makers.component';

import { ApiComponent } from './components/api/api.component';
import { ApiItemComponent } from './components/api-item/api-item.component';
import { AddPostComponent } from './components/add-post/add-post.component';

import { ListUsersComponent } from './users/list/list-users.component';
import { CreateUserComponent } from './users/create/create-user.component';
import { DisplayUserComponent } from './users/display/display-user.component';
import { DetailsUserComponent } from './users/details/details-user.component';

import { DetailsCoinComponent } from './coins/details/details-coin.component';
import { DisplayCoinComponent } from './coins/display/display-coin.component';
import { ListCoinsComponent } from './coins/list/list-coins.component';
import { AddCoinsComponent } from './coins/add/add-coins.component';

// import { UserService } from './services/user.service';
// import { UserListResolverService } from './services/user-list-resolver.service';
// import { CreateUserCanDeactivateGuardService } from './services/create-user-can-deactivate-guard.service';
// import { UserDetailsGuardService } from './services/user-details-guard.service';

import { SidebarService } from './components/layout/sidebar.service';
import { SidebarComponent } from './components/layout/sidebar.component';
import { SidebarToggleComponent } from './components/layout/sidebar-toggle.component';
import { DetailbarToggleComponent } from './components/layout/detailbar-toggle.component';
import { DetailbarComponent } from './components/layout/detailbar.component';
import { AccordionComponent } from './components/layout/accordion.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { PageNotFoundComponent } from './shared/page-not-found.component';

// import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,

    DataMakersComponent,
    ApiComponent,
    ApiItemComponent,
    AddPostComponent,

    ListUsersComponent,
    CreateUserComponent,
    DisplayUserComponent,
    DetailsUserComponent,

    DetailsCoinComponent,
    DisplayCoinComponent,
    ListCoinsComponent,
    AddCoinsComponent,
    PageNotFoundComponent,
    SidebarComponent,
    SidebarToggleComponent,
    DetailbarToggleComponent,
    DetailbarComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    // UserService,
    SidebarService, 
    // CreateUserCanDeactivateGuardService,
    // UserDetailsGuardService,
    // UserListResolverService
  ], // ApiService
  bootstrap: [AppComponent]
})
export class AppModule { }
