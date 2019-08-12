import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ListUsersComponent } from './users/list/list-users.component';
// import { EditUserComponent } from './users/edit/edit-user.component'; 
// import { DetailsUserComponent } from './users/details/details-user.component';

// import { UserListResolverService } from './services/user-list-resolver.service';
// import { EditUserCanDeactivateGuardService } from './services/edit-user-can-deactivate-guard.service';
// import { UserDetailsGuardService } from './services/user-details-guard.service';

import { TermsComponent } from './routes/terms.component';
import { NewsComponent } from './routes/news.component';
import { RegisterComponent } from './users/register/register.component';
import { LandingComponent } from './routes/landing.component';
import { ApiComponent } from './components/api/api.component';
import { AboutComponent } from './routes/about.component';
import { DataMakersComponent } from './data-makers/data-makers.component';
import { PageNotFoundComponent } from './routes/page-not-found.component';

import { ListCoinsComponent } from './coins/list/list-coins.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'coin-tracker',
    component: ListCoinsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'console',
    component: ApiComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'data',
    component: DataMakersComponent
  },

  { path: 'notfound', component: PageNotFoundComponent },

  { path: '**', redirectTo: '/console', pathMatch: 'full' }
  // {
  //   path: '',
  //   component: ListUsersComponent,
  //   resolve: { userList: UserListResolverService }
  // },

  // {
  //   path: 'list',
  //   component: ListUsersComponent,
  //   resolve: { userList: UserListResolverService }
  // },

  // {
  //   path: 'edit/:id',
  //   component: EditUserComponent,
  //   canDeactivate: [EditUserCanDeactivateGuardService]
  // }, 

  // {
  //   path: '',
  //   component: EditUserComponent,
  //   canDeactivate: [EditUserCanDeactivateGuardService]
  // },

  // {
  //   path: 'users/:id',
  //   component: DetailsUserComponent,
  //   canActivate: [UserDetailsGuardService]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
