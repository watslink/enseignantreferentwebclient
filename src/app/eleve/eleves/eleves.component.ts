import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  PipeTransform,
  ViewChild
} from '@angular/core';


import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {MDBModalRef, MDBModalService, MdbTableDirective, MdbTablePaginationComponent} from 'angular-bootstrap-md';
import {faPencilAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard} from '@fortawesome/free-solid-svg-icons/faAddressCard';
import {Eleve} from '../../../model/Eleve.model';
import {EleveService} from '../../../service/eleve.service';
import {AuthenticationService} from '../../../service/authentication.service';
import {EleveDeleteModalComponent} from '../eleve-delete-modal/eleve-delete-modal.component';




@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent, { static: true }) mdbTablePagination: MdbTablePaginationComponent;

  fapencil = faPencilAlt;
  facard = faAddressCard;
  fadelete = faTimes;
  public eleves: Eleve[] = [];
  public elevesData: Eleve[] = [];
  searchText = '';
  previous: string;

  maxVisibleItems = 8;
  modalRef: MDBModalRef;

  navigationSubscription;

  nullDate;
  list;

  constructor(private authServ: AuthenticationService,
              private eleveServ: EleveService,
              private router: Router,
              private cdRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private modalService: MDBModalService) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  @HostListener('input') oninput() {
    this.mdbTablePagination.searchText = this.searchText;
  }

  ngOnInit() {
    this.nullDate = '2019-01-01';
    this.list = this.route.snapshot.params.select;
    if ( this.list === 'tous') {
      this.refreshAll();
    }
    if ( this.list === 'nonvus') {
      this.refreshNonVus();
    }
    if ( this.list === 'vus') {
      this.refreshVus();
    }
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
  openEleveDetails(element: Eleve) {
    this.router.navigateByUrl('eleveDetails', {state: element});
  }
  openEleveEdit(element: Eleve) {
    this.router.navigateByUrl('eleveEdit', {state: element});
  }
  openModalDelete(element: Eleve) {
    this.modalRef = this.modalService.show(EleveDeleteModalComponent, {data: {eleve: element}});
    this.modalService.close.subscribe(res => {
      this.ngOnInit();
    });
  }
  refreshAll() {
    this.eleveServ.getListEleveInscrits(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe(
      element => {
        this.elevesData = element;
        for (const el of this.elevesData) {
          if (el.dateReunion === null) {
            el.dateReunion = this.nullDate;
          }
        }
        this.mdbTable.setDataSource(this.elevesData);
        this.eleves = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
  refreshNonVus() {
    this.eleveServ.getListEleveNonVus(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe(
      element => {
        this.elevesData = element;
        for (const el of this.elevesData) {
          if (el.dateReunion === null) {
            el.dateReunion = this.nullDate;
          }
        }
        this.mdbTable.setDataSource(this.elevesData);
        this.eleves = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
  refreshVus() {
    this.eleveServ.getListEleveVus(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe(
      element => {
        this.elevesData = element;
        for (const el of this.elevesData) {
          if (el.dateReunion === null) {
            el.dateReunion = this.nullDate;
          }
        }
        this.mdbTable.setDataSource(this.elevesData);
        this.eleves = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      },
      err => {
        this.authServ.logout();
        this.router.navigateByUrl('/login');
      });
  }
  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
