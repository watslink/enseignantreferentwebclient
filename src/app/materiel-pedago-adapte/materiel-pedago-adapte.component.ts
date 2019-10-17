import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, PipeTransform, ViewChild} from '@angular/core';
import {MaterielPedagoAdapte} from '../../model/MaterielPedagoAdapte.model';
import {AuthenticationService} from '../../service/authentication.service';
import {MaterielPedagoAdapteService} from '../../service/materielPedagoAdapte.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {MaterielPedagoAdapteEditModalComponent} from './materiel-pedago-adapte-edit-modal/materiel-pedago-adapte-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
// tslint:disable-next-line:import-spacing max-line-length
import {MaterielPedagoAdapteDeleteModalComponent} from './materiel-pedago-adapte-delete-modal/materiel-pedago-adapte-delete-modal.component';
import {MaterielPedagoAdapteAddModalComponent} from './materiel-pedago-adapte-add-modal/materiel-pedago-adapte-add-modal.component';



@Component({
  selector: 'app-materiel-pedago-adapte',
  templateUrl: './materiel-pedago-adapte.component.html',
  styleUrls: ['./materiel-pedago-adapte.component.css']
})
export class MaterielPedagoAdapteComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  fadelete = faTimes;
  public materielPedagoAdaptes: MaterielPedagoAdapte[] = [];
  public materielPedagoAdaptesData: MaterielPedagoAdapte[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;
  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private materielPedagoAdapteServ: MaterielPedagoAdapteService,
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
      this.materielPedagoAdaptes = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.refresh();
      this.materielPedagoAdaptes = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalEdit(element: MaterielPedagoAdapte) {
    this.modalRef = this.modalService.show(MaterielPedagoAdapteEditModalComponent, {data: {materielPedagoAdapte: element}});
  }
  openModalDelete(element: MaterielPedagoAdapte) {
    this.modalRef = this.modalService.show(MaterielPedagoAdapteDeleteModalComponent, {data: {materielPedagoAdapte: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  openModalNew() {
    this.modalRef = this.modalService.show(MaterielPedagoAdapteAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  refresh() {
    this.materielPedagoAdapteServ.getListMaterielPedagoAdapte().subscribe(
      element => {
        this.materielPedagoAdaptesData = element;
        this.mdbTable.setDataSource(this.materielPedagoAdaptesData);
        this.materielPedagoAdaptes = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
