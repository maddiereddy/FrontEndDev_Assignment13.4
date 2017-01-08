import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user/user-detail.component';
import { PageNotFoundComponent } from './not-found.component';


@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [
      AppComponent, HomeComponent, AboutComponent,
      ContactComponent, UserComponent,
      UserDetailComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
