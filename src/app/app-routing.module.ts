import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ListUsersComponent } from './users/list/list-users.component';
// import { CreateUserComponent } from './users/create/create-user.component'; 
// import { DetailsUserComponent } from './users/details/details-user.component';

// import { UserListResolverService } from './services/user-list-resolver.service';
// import { CreateUserCanDeactivateGuardService } from './services/create-user-can-deactivate-guard.service';
// import { UserDetailsGuardService } from './services/user-details-guard.service';

import { ApiComponent } from './components/api/api.component';
import { AboutComponent } from './components/routes/about.component';
import { DataMakersComponent } from './data-makers/data-makers.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';


const routes: Routes = [
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
  //   component: CreateUserComponent,
  //   canDeactivate: [CreateUserCanDeactivateGuardService]
  // }, 

  // {
  //   path: '',
  //   component: CreateUserComponent,
  //   canDeactivate: [CreateUserCanDeactivateGuardService]
  // },

  // {
  //   path: 'users/:id',
  //   component: DetailsUserComponent,
  //   canActivate: [UserDetailsGuardService]
  // },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
