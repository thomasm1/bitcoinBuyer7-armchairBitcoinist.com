import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiComponent } from './components/api/api.component';
import { ApiItemComponent } from './components/api-item/api-item.component';

// import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    ApiItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [], // ApiService
  bootstrap: [AppComponent]
})
export class AppModule { }
