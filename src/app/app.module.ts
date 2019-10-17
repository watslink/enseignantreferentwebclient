import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationService} from '../service/authentication.service';
import { AccueilComponent } from './accueil/accueil.component';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from '../interceptor/AuthInterceptor';
import {StructureService} from '../service/structure.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AESHService} from '../service/AESH.service';
import {CategorieService} from '../service/categorie.service';
import {EleveService} from '../service/eleve.service';
import {EtablissementService} from '../service/etablissement.service';
import {MaterielPedagoAdapteService} from '../service/materielpedagoadapte.service';
import {NiveauService} from '../service/niveau.service';
import {PIALService} from '../service/PIAL.service';
import { StructureComponent } from './structure/structure.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MDBBootstrapModule, MDBModalService} from 'angular-bootstrap-md';
import { StructureDetailsModalComponent } from './structure/structure-details-modal/structure-details-modal.component';
import { StructureEditModalComponent } from './structure/structure-edit-modal/structure-edit-modal.component';
import { StructureDeleteModalComponent } from './structure/structure-delete-modal/structure-delete-modal.component';
import { StructureAddModalComponent } from './structure/structure-add-modal/structure-add-modal.component';
import {PialComponent} from './pial/pial.component';
import {PialDeleteModalComponent} from './pial/pial-delete-modal/pial-delete-modal.component';
import {PialEditModalComponent} from './pial/pial-edit-modal/pial-edit-modal.component';
import {PialAddModalComponent} from './pial/pial-add-modal/pial-add-modal.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { EtablissementAddModalComponent } from './etablissement/etablissement-add-modal/etablissement-add-modal.component';
import { EtablissementDeleteModalComponent } from './etablissement/etablissement-delete-modal/etablissement-delete-modal.component';
import { EtablissementDetailsModalComponent } from './etablissement/etablissement-details-modal/etablissement-details-modal.component';
import { EtablissementEditModalComponent } from './etablissement/etablissement-edit-modal/etablissement-edit-modal.component';
import { NiveauComponent } from './niveau/niveau.component';
import { NiveauEditModalComponent } from './niveau/niveau-edit-modal/niveau-edit-modal.component';
import { NiveauDeleteModalComponent } from './niveau/niveau-delete-modal/niveau-delete-modal.component';
import { NiveauAddModalComponent } from './niveau/niveau-add-modal/niveau-add-modal.component';


const appRoutes: Routes = [
  {path: 'structure', component: StructureComponent},
  {path: 'pial', component: PialComponent},
  {path: 'etablissement', component: EtablissementComponent},
  {path: 'niveau', component: NiveauComponent},
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
    AccueilComponent,
    StructureComponent,
    StructureDetailsModalComponent,
    StructureEditModalComponent,
    StructureDeleteModalComponent,
    StructureAddModalComponent,
    PialComponent,
    PialEditModalComponent,
    PialDeleteModalComponent,
    PialAddModalComponent,
    EtablissementComponent,
    EtablissementAddModalComponent,
    EtablissementDeleteModalComponent,
    EtablissementDetailsModalComponent,
    EtablissementEditModalComponent,
    NiveauComponent,
    NiveauEditModalComponent,
    NiveauDeleteModalComponent,
    NiveauAddModalComponent
  ],
  entryComponents: [
    StructureDetailsModalComponent,
    StructureEditModalComponent,
    StructureDeleteModalComponent,
    StructureAddModalComponent,
    PialEditModalComponent,
    PialDeleteModalComponent,
    PialAddModalComponent,
    EtablissementAddModalComponent,
    EtablissementDeleteModalComponent,
    EtablissementDetailsModalComponent,
    EtablissementEditModalComponent,
    NiveauEditModalComponent,
    NiveauDeleteModalComponent,
    NiveauAddModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    AuthenticationService,
    AuthInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    StructureService,
    AESHService,
    CategorieService,
    EleveService,
    EtablissementService,
    MaterielPedagoAdapteService,
    NiveauService,
    PIALService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
