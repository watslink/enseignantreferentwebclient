import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, PipeTransform, ViewChild} from '@angular/core';
import {Etablissement} from '../../model/Etablissement.model';
import {AuthenticationService} from '../../service/authentication.service';
import {EtablissementService} from '../../service/etablissement.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {EtablissementDetailsModalComponent} from './etablissement-details-modal/etablissement-details-modal.component';
import {EtablissementEditModalComponent} from './etablissement-edit-modal/etablissement-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';
import {EtablissementDeleteModalComponent} from './etablissement-delete-modal/etablissement-delete-modal.component';
import {EtablissementAddModalComponent} from './etablissement-add-modal/etablissement-add-modal.component';



@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  facard = faAddressCard;
  fadelete = faTimes;
  public etablissements: Etablissement[] = [];
  public etablissementsData: Etablissement[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;
  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private etablissementServ: EtablissementService,
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
      this.etablissements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.refresh();
      this.etablissements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalDetails(element: Etablissement) {
    this.modalRef = this.modalService.show(EtablissementDetailsModalComponent, {data: {etablissement: element}});
  }
  openModalEdit(element: Etablissement) {
    this.modalRef = this.modalService.show(EtablissementEditModalComponent, {data: {etablissement: element}});
  }
  openModalDelete(element: Etablissement) {
    this.modalRef = this.modalService.show(EtablissementDeleteModalComponent, {data: {etablissement: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  openModalNew() {
    this.modalRef = this.modalService.show(EtablissementAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  refresh() {
    this.etablissementServ.getListEtablissement().subscribe(
      element => {
        this.etablissementsData = element;
        this.mdbTable.setDataSource(this.etablissementsData);
        this.etablissements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
