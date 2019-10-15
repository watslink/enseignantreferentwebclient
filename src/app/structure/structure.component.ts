import {AfterViewInit, ChangeDetectorRef, Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {Structure} from '../../model/Structure.model';
import {AuthenticationService} from '../../service/authentication.service';
import {StructureService} from '../../service/structure.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {StructureDetailsModalComponent} from './structure-details-modal/structure-details-modal.component';
import {StructureEditModalComponent} from './structure-edit-modal/structure-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';
import {StructureDeleteModalComponent} from './structure-delete-modal/structure-delete-modal.component';
import {StructureAddModalComponent} from './structure-add-modal/structure-add-modal.component';



@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  facard = faAddressCard;
  fadelete = faTimes;
  public structures: Structure[] = [];
  public structuresData: Structure[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;

  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private structureServ: StructureService,
              private router: Router,
              private cdRef: ChangeDetectorRef,
              private modalService: MDBModalService) {
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngOnInit() {
    this.structureServ.getListStructure().subscribe(
      struct => {
        this.structuresData = struct;
        this.mdbTable.setDataSource(this.structuresData);
        this.structures = this.mdbTable.getDataSource();
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
      this.structures = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.structures = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalDetails(element: Structure) {
      this.modalRef = this.modalService.show(StructureDetailsModalComponent, {data: {structure: element}});
  }
  openModalEdit(element: Structure) {
    this.modalRef = this.modalService.show(StructureEditModalComponent, {data: {structure: element}});
  }
  openModalDelete(element: Structure) {
    this.modalRef = this.modalService.show(StructureDeleteModalComponent, {data: {structure: element}});
  }
  openModalNew() {
    this.modalRef = this.modalService.show(StructureAddModalComponent);
  }
}
