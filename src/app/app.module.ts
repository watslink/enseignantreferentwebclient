import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import { AccueilComponent } from './accueil/accueil.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../interceptor/AuthInterceptor';
import {StructureService} from '../service/structure.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, NgbModule
  ],
  providers: [
    AuthenticationService,
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    StructureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
