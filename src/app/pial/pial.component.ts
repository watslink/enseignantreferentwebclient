import {AfterViewInit, ChangeDetectorRef, Component,  HostListener, OnInit, ViewChild} from '@angular/core';
import {PIAL} from '../../model/PIAL.model';
import {AuthenticationService} from '../../service/authentication.service';
import {PIALService} from '../../service/PIAL.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {PialEditModalComponent} from './pial-edit-modal/pial-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {PialDeleteModalComponent} from './pial-delete-modal/pial-delete-modal.component';
import {PialAddModalComponent} from './pial-add-modal/pial-add-modal.component';



@Component({
  selector: 'app-pial',
  templateUrl: './pial.component.html',
  styleUrls: ['./pial.component.css']
})
export class PialComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  fadelete = faTimes;
  public pials: PIAL[] = [];
  public pialsData: PIAL[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;

  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private pialServ: PIALService,
              private router: Router,
              private cdRef: ChangeDetectorRef,
              private modalService: MDBModalService) {
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngOnInit() {
    this.pialServ.getListPIAL().subscribe(
      struct => {
        this.pialsData = struct;
        this.mdbTable.setDataSource(this.pialsData);
        this.pials = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
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
      this.pials = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.pials = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalEdit(element: PIAL) {
    this.modalRef = this.modalService.show(PialEditModalComponent, {data: {pial: element}});
  }
  openModalDelete(element: PIAL) {
    this.modalRef = this.modalService.show(PialDeleteModalComponent, {data: {pial: element}});
  }
  openModalNew() {
    this.modalRef = this.modalService.show(PialAddModalComponent);
  }
}
