import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {DossiersEnCoursEditModalComponent} from './dossiers-en-cours-edit-modal/dossiers-en-cours-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {DossiersEnCoursDeleteModalComponent} from './dossiers-en-cours-delete-modal/dossiers-en-cours-delete-modal.component';
import {Eleve} from '../../model/Eleve.model';
import {EleveService} from '../../service/eleve.service';



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
  openModalEdit(element: Eleve) {
    this.modalRef = this.modalService.show(DossiersEnCoursEditModalComponent, {data: {eleve: element}});
  }
  openModalDelete(element: Eleve) {
    this.modalRef = this.modalService.show(DossiersEnCoursDeleteModalComponent, {data: {eleve: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  refresh() {
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
