import {AfterViewInit, ChangeDetectorRef, Component,  HostListener, OnInit, ViewChild} from '@angular/core';
import {Categorie} from '../../model/Categorie.model';
import {AuthenticationService} from '../../service/authentication.service';
import {CategorieService} from '../../service/categorie.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {CategorieEditModalComponent} from './categorie-edit-modal/categorie-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {CategorieDeleteModalComponent} from './categorie-delete-modal/categorie-delete-modal.component';
import {CategorieAddModalComponent} from './categorie-add-modal/categorie-add-modal.component';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  fadelete = faTimes;
  facard = faAddressCard;
  public categories: Categorie[] = [];
  public categoriesData: Categorie[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;

  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private categorieServ: CategorieService,
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
      this.categories = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.categories = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalEdit(element: Categorie) {
    this.modalRef = this.modalService.show(CategorieEditModalComponent, {data: {categorie: element}});
  }
  openModalDelete(element: Categorie) {
    this.modalRef = this.modalService.show(CategorieDeleteModalComponent, {data: {categorie: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  openModalNew() {
    this.modalRef = this.modalService.show(CategorieAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  refresh() {
    this.categorieServ.getListCategorie().subscribe(
      element => {
        this.categoriesData = element;
        this.mdbTable.setDataSource(this.categoriesData);
        this.categories = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
