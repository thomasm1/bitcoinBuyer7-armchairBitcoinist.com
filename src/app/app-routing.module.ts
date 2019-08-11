import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { AboutComponent } from './components/routes/about.component';
import { DataMakersComponent } from './data-makers/data-makers.component';
import { PageNotFoundComponent } from './shared/page-not-found.component';


const routes: Routes = [
  {
    path: '',
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

  { path: '**', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
