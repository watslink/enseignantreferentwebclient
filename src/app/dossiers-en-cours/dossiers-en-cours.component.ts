import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {faClipboardList, faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {DossiersEnCoursDeleteModalComponent} from './dossiers-en-cours-delete-modal/dossiers-en-cours-delete-modal.component';
import {Eleve} from '../../model/Eleve.model';
import {EleveService} from '../../service/eleve.service';
import {DossiersEnCoursValidateModalComponent} from './dossiers-en-cours-validate-modal/dossiers-en-cours-validate-modal.component';
import {faCheck} from '@fortawesome/free-solid-svg-icons/faCheck';
import {EleveAddComponent} from '../eleve/eleve-add/eleve-add.component';



@Component({
  selector: 'app-dossiers-en-cours',
  templateUrl: './dossiers-en-cours.component.html',
  styleUrls: ['./dossiers-en-cours.component.css']
})
export class DossiersEnCoursComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  fadelete = faTimes;
  favalidate = faCheck;
  falist = faClipboardList;
  public eleves: Eleve[] = [];
  public elevesData: Eleve[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;
  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private eleveServ: EleveService,
              private router: Router,
              private cdRef: ChangeDetectorRef,
              private modalService: MDBModalService) {
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngOnInit() {
    this.refresh();
  }
  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(this.maxVisibleItems);
    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }
  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(prev);
      this.eleves = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.eleves = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalDelete(element: Eleve) {
    this.modalRef = this.modalService.show(DossiersEnCoursDeleteModalComponent, {data: {eleve: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  openEleveAdd() {
    this.router.navigateByUrl('eleveAdd');
  }
  openEleveEdit(element: Eleve) {
    this.router.navigateByUrl('eleveEdit', {state: element});
  }
  openDocRequisEdit(element: Eleve) {
    this.router.navigateByUrl('eleveDocRequisEdit', {state: element});
  }
  validate(element: Eleve) {
    this.modalRef = this.modalService.show(DossiersEnCoursValidateModalComponent, {data: {eleve: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  checkIfCanValidate(element: Eleve): boolean {
    for ( const edir of element.listEleveDocumentsInscriptionRequis ) {
      if (!edir.ok) {
        return false;
      }
  }
    return true;
  }
  refresh() {
    this.eleves = null;
    this.elevesData = null;
    this.eleveServ.getListEleveNonInscrits(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe(
      element => {
        this.elevesData = element;
        this.mdbTable.setDataSource(this.elevesData);
        this.eleves = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
