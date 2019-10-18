import {AfterViewInit, ChangeDetectorRef, Component,  HostListener, OnInit, ViewChild} from '@angular/core';
import {AESH} from '../../model/AESH.model';
import {AuthenticationService} from '../../service/authentication.service';
import {AESHService} from '../../service/AESH.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {AeshEditModalComponent} from './aesh-edit-modal/aesh-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {AeshDeleteModalComponent} from './aesh-delete-modal/aesh-delete-modal.component';
import {AeshAddModalComponent} from './aesh-add-modal/aesh-add-modal.component';
import {Structure} from '../../model/Structure.model';
import {StructureDetailsModalComponent} from '../structure/structure-details-modal/structure-details-modal.component';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';
import {AeshDetailsModalComponent} from './aesh-details-modal/aesh-details-modal.component';



@Component({
  selector: 'app-aesh',
  templateUrl: './aesh.component.html',
  styleUrls: ['./aesh.component.css']
})
export class AeshComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  fadelete = faTimes;
  facard = faAddressCard;
  public aeshs: AESH[] = [];
  public aeshsData: AESH[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;

  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private aeshServ: AESHService,
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
      this.aeshs = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.aeshs = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalDetails(element: AESH) {
    this.modalRef = this.modalService.show(AeshDetailsModalComponent, {data: {aesh: element}});
  }
  openModalEdit(element: AESH) {
    this.modalRef = this.modalService.show(AeshEditModalComponent, {data: {aesh: element}});
  }
  openModalDelete(element: AESH) {
    this.modalRef = this.modalService.show(AeshDeleteModalComponent, {data: {aesh: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  openModalNew() {
    this.modalRef = this.modalService.show(AeshAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  refresh() {
    this.aeshServ.getListAESH(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe(
      element => {
        this.aeshsData = element;
        this.mdbTable.setDataSource(this.aeshsData);
        this.aeshs = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
