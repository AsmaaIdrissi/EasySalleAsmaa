import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { fakeBackendProvider } from './_helpers/fake-backend';
import {  ErrorInterceptor } from './_helpers/error.interceptor';
import {JwtInterceptor} from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { SallesComponent } from './components/salles/salles.component';
import { CreateComponent } from './components/create/create.component';

import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';


import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';
import { SliderAboutComponent } from './components/slider-about/slider-about.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { SearchComponent } from './components/search/search.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import {HomeLoginComponent} from './components/homeLogin/homeLogin.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SallesComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective,
    SliderAboutComponent,
    ReservationComponent,
    SearchComponent,
    ContactComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HomeLoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    appRoutingProviders,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
