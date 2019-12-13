import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

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
import {NgbDateAdapter, NgbDateNativeAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AESHService} from '../service/AESH.service';
import {CategorieService} from '../service/categorie.service';
import {EleveService} from '../service/eleve.service';
import {EtablissementService} from '../service/etablissement.service';
import {MaterielPedagoAdapteService} from '../service/materielPedagoAdapte.service';
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
import { AeshComponent } from './aesh/aesh.component';
import { AeshAddModalComponent } from './aesh/aesh-add-modal/aesh-add-modal.component';
import { AeshDeleteModalComponent } from './aesh/aesh-delete-modal/aesh-delete-modal.component';
import { AeshEditModalComponent } from './aesh/aesh-edit-modal/aesh-edit-modal.component';
import { AeshDetailsModalComponent } from './aesh/aesh-details-modal/aesh-details-modal.component';
import { CategorieComponent } from './categorie/categorie.component';
import { CategorieAddModalComponent } from './categorie/categorie-add-modal/categorie-add-modal.component';
import { CategorieDeleteModalComponent } from './categorie/categorie-delete-modal/categorie-delete-modal.component';
import { CategorieEditModalComponent } from './categorie/categorie-edit-modal/categorie-edit-modal.component';
import { MaterielPedagoAdapteComponent } from './materiel-pedago-adapte/materiel-pedago-adapte.component';
// tslint:disable-next-line:max-line-length
import { MaterielPedagoAdapteAddModalComponent } from './materiel-pedago-adapte/materiel-pedago-adapte-add-modal/materiel-pedago-adapte-add-modal.component';
// tslint:disable-next-line:max-line-length max-line-length
import { MaterielPedagoAdapteDeleteModalComponent } from './materiel-pedago-adapte/materiel-pedago-adapte-delete-modal/materiel-pedago-adapte-delete-modal.component';
// tslint:disable-next-line:max-line-length
import { MaterielPedagoAdapteEditModalComponent } from './materiel-pedago-adapte/materiel-pedago-adapte-edit-modal/materiel-pedago-adapte-edit-modal.component';
import { DocumentInscriptionRequisComponent } from './document-inscription-requis/document-inscription-requis.component';
// tslint:disable-next-line:max-line-length
import { DocumentInscriptionRequisEditModalComponent } from './document-inscription-requis/document-inscription-requis-edit-modal/document-inscription-requis-edit-modal.component';
// tslint:disable-next-line:max-line-length max-line-length
import { DocumentInscriptionRequisDeleteModalComponent } from './document-inscription-requis/document-inscription-requis-delete-modal/document-inscription-requis-delete-modal.component';
// tslint:disable-next-line:max-line-length
import { DocumentInscriptionRequisAddModalComponent } from './document-inscription-requis/document-inscription-requis-add-modal/document-inscription-requis-add-modal.component';
import {DocumentInscriptionRequisService} from '../service/documentinscriptionrequis.service';
import { DossiersEnCoursComponent } from './dossiers-en-cours/dossiers-en-cours.component';
// tslint:disable-next-line:max-line-length
import { DossiersEnCoursDeleteModalComponent } from './dossiers-en-cours/dossiers-en-cours-delete-modal/dossiers-en-cours-delete-modal.component';
import localeFr from '@angular/common/locales/fr';
import {DatePipe, registerLocaleData} from '@angular/common';
// tslint:disable-next-line:max-line-length
import { DossiersEnCoursValidateModalComponent } from './dossiers-en-cours/dossiers-en-cours-validate-modal/dossiers-en-cours-validate-modal.component';
registerLocaleData(localeFr);
import {FileUploadModule} from 'ng2-file-upload';
import {FileService} from '../service/file.service';
import { FileAddModalComponent } from './file/file-add-modal/file-add-modal.component';
import { EleveEditComponent } from './eleve/eleve-edit/eleve-edit.component';
import {NgxDocViewerModule} from 'ngx-doc-viewer';
import { FileViewerModalComponent } from './file/file-viewer-modal/file-viewer-modal.component';
import { DossiersEnCoursDocRequisComponent } from './dossiers-en-cours/dossiers-en-cours-doc-requis/dossiers-en-cours-doc-requis.component';
// tslint:disable-next-line:max-line-length
import { RepresentantLegalAddModalComponent } from './representant-legal/representant-legal-add-modal/representant-legal-add-modal.component';
import {RepresentantLegalService} from '../service/representantlegal.service';
// tslint:disable-next-line:max-line-length
import { RepresentantLegalDetailsModalComponent } from './representant-legal/representant-legal-details-modal/representant-legal-details-modal.component';
// tslint:disable-next-line:max-line-length
import { RepresentantLegalEditModalComponent } from './representant-legal/representant-legal-edit-modal/representant-legal-edit-modal.component';
// tslint:disable-next-line:max-line-length
import { RepresentantLegalDeleteModalComponent } from './representant-legal/representant-legal-delete-modal/representant-legal-delete-modal.component';
import { EleveAddComponent } from './eleve/eleve-add/eleve-add.component';
import { ElevesComponent } from './eleve/eleves/eleves.component';
import { EleveDeleteModalComponent } from './eleve/eleve-delete-modal/eleve-delete-modal.component';
import { EleveDetailsComponent } from './eleve/eleve-details/eleve-details.component';
import { FileDeleteModalComponent } from './file/file-delete-modal/file-delete-modal.component';
import { ReunionModalComponent } from './reunion-modal/reunion-modal.component';
import { MailListModalComponent } from './mail-list-modal/mail-list-modal.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';


const appRoutes: Routes = [
  // PATH for "Gestion"
  {path: 'structure', component: StructureComponent},
  {path: 'pial', component: PialComponent},
  {path: 'etablissement', component: EtablissementComponent},
  {path: 'niveau', component: NiveauComponent},
  {path: 'aesh', component: AeshComponent},
  {path: 'materielPedagoAdpate', component: MaterielPedagoAdapteComponent},
  {path: 'categorie', component: CategorieComponent},
  // PATH for "Eleve"
  {path: 'eleveEdit', component: EleveEditComponent},
  {path: 'eleveAdd', component: EleveAddComponent},
  {path: 'eleveDetails', component: EleveDetailsComponent},
  {path: 'eleves/:select', component: ElevesComponent, runGuardsAndResolvers: 'always'},
  // PATH for "Inscription"
  {path: 'docRequis', component: DocumentInscriptionRequisComponent},
  {path: 'dossierEnCours', component: DossiersEnCoursComponent, runGuardsAndResolvers: 'always'},
  {path: 'eleveDocRequisEdit', component: DossiersEnCoursDocRequisComponent},
  // Other PATH
  {path: 'monCompte', component: MonCompteComponent},
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
    NiveauAddModalComponent,
    AeshComponent,
    AeshAddModalComponent,
    AeshDeleteModalComponent,
    AeshEditModalComponent,
    AeshDetailsModalComponent,
    CategorieComponent,
    CategorieAddModalComponent,
    CategorieDeleteModalComponent,
    CategorieEditModalComponent,
    MaterielPedagoAdapteComponent,
    MaterielPedagoAdapteAddModalComponent,
    MaterielPedagoAdapteDeleteModalComponent,
    MaterielPedagoAdapteEditModalComponent,
    DocumentInscriptionRequisComponent,
    DocumentInscriptionRequisEditModalComponent,
    DocumentInscriptionRequisDeleteModalComponent,
    DocumentInscriptionRequisAddModalComponent,
    DossiersEnCoursComponent,
    DossiersEnCoursDeleteModalComponent,
    DossiersEnCoursValidateModalComponent,
    FileAddModalComponent,
    EleveEditComponent,
    FileViewerModalComponent,
    DossiersEnCoursDocRequisComponent,
    RepresentantLegalAddModalComponent,
    RepresentantLegalDetailsModalComponent,
    RepresentantLegalEditModalComponent,
    RepresentantLegalDeleteModalComponent,
    EleveAddComponent,
    ElevesComponent,
    EleveDeleteModalComponent,
    EleveDetailsComponent,
    FileDeleteModalComponent,
    ReunionModalComponent,
    MailListModalComponent,
    MonCompteComponent
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
    NiveauAddModalComponent,
    AeshAddModalComponent,
    AeshDeleteModalComponent,
    AeshEditModalComponent,
    AeshDetailsModalComponent,
    CategorieAddModalComponent,
    CategorieDeleteModalComponent,
    CategorieEditModalComponent,
    MaterielPedagoAdapteAddModalComponent,
    MaterielPedagoAdapteDeleteModalComponent,
    MaterielPedagoAdapteEditModalComponent,
    DocumentInscriptionRequisEditModalComponent,
    DocumentInscriptionRequisDeleteModalComponent,
    DocumentInscriptionRequisAddModalComponent,
    DossiersEnCoursDeleteModalComponent,
    DossiersEnCoursValidateModalComponent,
    FileAddModalComponent,
    FileViewerModalComponent,
    RepresentantLegalAddModalComponent,
    RepresentantLegalDetailsModalComponent,
    RepresentantLegalEditModalComponent,
    RepresentantLegalDeleteModalComponent,
    EleveDeleteModalComponent,
    FileDeleteModalComponent,
    ReunionModalComponent,
    MailListModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MDBBootstrapModule.forRoot(),
    FileUploadModule,
    NgxDocViewerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter},
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
    PIALService,
    DocumentInscriptionRequisService,
    FileService,
    RepresentantLegalService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
