import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ApiComponent } from './components/api/api.component';
import { ApiItemComponent } from './components/api-item/api-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AboutComponent } from './components/routes/about.component'; 

// import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    ApiItemComponent,
    HeaderComponent,
    AddPostComponent,
    AboutComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [], // ApiService
  bootstrap: [AppComponent]
})
export class AppModule { }
