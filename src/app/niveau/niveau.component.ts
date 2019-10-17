import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, PipeTransform, ViewChild} from '@angular/core';
import {Niveau} from '../../model/Niveau.model';
import {AuthenticationService} from '../../service/authentication.service';
import {NiveauService} from '../../service/niveau.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {NiveauEditModalComponent} from './niveau-edit-modal/niveau-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';
import {NiveauDeleteModalComponent} from './niveau-delete-modal/niveau-delete-modal.component';
import {NiveauAddModalComponent} from './niveau-add-modal/niveau-add-modal.component';



@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  facard = faAddressCard;
  fadelete = faTimes;
  public niveaux: Niveau[] = [];
  public niveauxData: Niveau[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;
  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private niveauxerv: NiveauService,
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
      this.niveaux = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.niveaux = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalEdit(element: Niveau) {
    this.modalRef = this.modalService.show(NiveauEditModalComponent, {data: {niveau: element}});
  }
  openModalDelete(element: Niveau) {
    this.modalRef = this.modalService.show(NiveauDeleteModalComponent, {data: {niveau: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  openModalNew() {
    this.modalRef = this.modalService.show(NiveauAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  refresh() {
    this.niveauxerv.getListNiveau().subscribe(
      element => {
        this.niveauxData = element;
        this.mdbTable.setDataSource(this.niveauxData);
        this.niveaux = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
