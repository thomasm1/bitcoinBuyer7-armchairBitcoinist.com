
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { DataMakersComponent } from './data-makers/data-makers.component';
import { ApiComponent } from './components/api/api.component';
import { ApiItemComponent } from './components/api-item/api-item.component';
import { AddApiComponent } from './components/add-api/add-api.component';

import { ListUsersComponent } from './users/list/list-users.component';
import { DisplayUserComponent } from './users/display/display-user.component';
import { DetailsUserComponent } from './users/details/details-user.component';
import { EditUserComponent } from './users/edit/edit-user.component';

import { ListCoinsComponent } from './coins/list/list-coins.component';
import { DisplayCoinComponent } from './coins/display/display-coin.component';
import { DetailsCoinComponent } from './coins/details/details-coin.component';
import { AddCoinsComponent } from './coins/add/add-coins.component';

import { UserService } from './services/user.service';
import { LambdaPriceService } from './services/lambda-price.service';

// import { UserListResolverService } from './services/user-list-resolver.service';
// import { EditUserCanDeactivateGuardService } from './services/edit-user-can-deactivate-guard.service';
// import { UserDetailsGuardService } from './services/user-details-guard.service';

import { PageNotFoundComponent } from './routes/page-not-found.component';
import { RegisterComponent } from './users/register/register.component';
import { LandingComponent } from './routes/landing.component';
import { AboutComponent } from './routes/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TermsComponent } from './routes/terms.component';
import { NewsComponent } from './routes/news.component';

import { SidebarService } from './shared/layout/sidebar.service';
import { SidebarComponent } from './shared/layout/sidebar.component';
import { SidebarToggleComponent } from './shared/layout/sidebar-toggle.component';
import { DetailbarToggleComponent } from './shared/layout/detailbar-toggle.component';
import { DetailbarComponent } from './shared/layout/detailbar.component';
import { AccordionComponent } from './shared/layout/accordion.component';
import { HomeComponent } from './routes/home.component';

// import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    DataMakersComponent,
    ApiComponent,
    ApiItemComponent,
    AddApiComponent,

    ListUsersComponent,
    DisplayUserComponent,
    DetailsUserComponent,
    EditUserComponent,

    ListCoinsComponent,
    DisplayCoinComponent,
    DetailsCoinComponent,
    AddCoinsComponent,

    LandingComponent,
    AboutComponent,
    RegisterComponent,
    FooterComponent,
    TermsComponent,
    NewsComponent,

    PageNotFoundComponent,
    SidebarComponent,
    SidebarToggleComponent,
    DetailbarToggleComponent,
    DetailbarComponent,
    AccordionComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireAuthModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],

  providers: [
    UserService,
    SidebarService,
    LambdaPriceService
    // EditUserCanDeactivateGuardService,
    // UserDetailsGuardService,
    // UserListResolverService

  ], // ApiService
  bootstrap: [AppComponent]
})
export class AppModule { }
