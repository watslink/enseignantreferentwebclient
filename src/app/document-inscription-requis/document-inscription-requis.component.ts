import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, PipeTransform, ViewChild} from '@angular/core';
import {DocumentInscriptionRequis} from '../../model/DocumentInscriptionRequis.model';
import {AuthenticationService} from '../../service/authentication.service';
import {DocumentInscriptionRequisService} from '../../service/documentinscriptionrequis.service';
import {Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
// tslint:disable-next-line:max-line-length
import {DocumentInscriptionRequisEditModalComponent} from './document-inscription-requis-edit-modal/document-inscription-requis-edit-modal.component';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
// tslint:disable-next-line:import-spacing max-line-length
import {DocumentInscriptionRequisDeleteModalComponent} from './document-inscription-requis-delete-modal/document-inscription-requis-delete-modal.component';
// tslint:disable-next-line:max-line-length
import {DocumentInscriptionRequisAddModalComponent} from './document-inscription-requis-add-modal/document-inscription-requis-add-modal.component';


@Component({
  selector: 'app-document-inscription-requis',
  templateUrl: './document-inscription-requis.component.html',
  styleUrls: ['./document-inscription-requis.component.css']
})
export class DocumentInscriptionRequisComponent implements OnInit, AfterViewInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  fadelete = faTimes;
  public documentInscriptionRequiss: DocumentInscriptionRequis[] = [];
  public documentInscriptionRequissData: DocumentInscriptionRequis[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;
  modalRef: MDBModalRef;

  constructor(private authServ: AuthenticationService,
              private documentInscriptionRequisServ: DocumentInscriptionRequisService,
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
      this.documentInscriptionRequiss = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.documentInscriptionRequiss = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(this.mdbTable.getDataSource());
    }
  }
  openModalEdit(element: DocumentInscriptionRequis) {
    this.modalRef = this.modalService.show(DocumentInscriptionRequisEditModalComponent, {data: {documentInscriptionRequis: element}});
  }
  openModalDelete(element: DocumentInscriptionRequis) {
    this.modalRef = this.modalService.show(DocumentInscriptionRequisDeleteModalComponent, {data: {documentInscriptionRequis: element}});
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  openModalNew() {
    this.modalRef = this.modalService.show(DocumentInscriptionRequisAddModalComponent);
    this.modalService.close.subscribe(res => {
      this.refresh();
    });
  }
  refresh() {
    this.documentInscriptionRequisServ.getListDocumentInscriptionRequis(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe(
      element => {
        this.documentInscriptionRequissData = element;
        this.mdbTable.setDataSource(this.documentInscriptionRequissData);
        this.documentInscriptionRequiss = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
}
