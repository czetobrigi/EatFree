import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { place } from './_models/place';
import { User } from './_models/user';
//import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ProductComponent,
    ContactComponent,
    NavComponent,
    ProfileComponent,
    HomeComponent,
    LoginComponent,
    //RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Contact us modulehoz form
    ReactiveFormsModule
  ],
  exports: [
    place,
    User
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
