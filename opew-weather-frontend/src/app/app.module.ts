import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataTablesModule} from 'angular-datatables';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CitiesPageComponent } from './pages/cities-page/cities-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    CitiesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
