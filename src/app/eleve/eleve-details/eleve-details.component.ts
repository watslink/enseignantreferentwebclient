import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../model/Eleve.model';
import {Location} from '@angular/common';
import {FileAddModalComponent} from '../../file/file-add-modal/file-add-modal.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {faDownload, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {EleveService} from '../../../service/eleve.service';
import {FileService} from '../../../service/file.service';
import {Document} from '../../../model/Document.model';
import {FileDeleteModalComponent} from '../../file/file-delete-modal/file-delete-modal.component';
import {Categorie} from '../../../model/Categorie.model';
import {CategorieService} from '../../../service/categorie.service';
import {ReunionModalComponent} from '../../reunion-modal/reunion-modal.component';
import {MailListModalComponent} from '../../mail-list-modal/mail-list-modal.component';


@Component({
  selector: 'app-eleve-details',
  templateUrl: './eleve-details.component.html',
  styleUrls: ['./eleve-details.component.css']
})
export class EleveDetailsComponent implements OnInit {

  eleve: Eleve;
  modalRef: MDBModalRef;
  faDown = faDownload;
  faView = faSearch;
  fadelete = faTimes;
  categories: Categorie[];
  nullDate;
  blob;
  urlFile;
  constructor(private eleveServ: EleveService,
              private modalService: MDBModalService,
              private fileService: FileService,
              private categorieService: CategorieService,
              private location: Location) { }

  ngOnInit() {
    this.nullDate = '2019-01-01';
    this.eleve = history.state;
    this.categorieService.getListCategorie(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.categories = res;
    });
  }
  back() {
    this.location.back();
  }
  openFileModalAdd() {
    this.modalRef = this.modalService.show(FileAddModalComponent, {data: {eleve: this.eleve, type: 'addDoc'}});
    this.modalService.close.subscribe( res => {
      this.ngOnInit();
    });
  }
  viewFile(element: Document) {
    this.fileService.getFile(element.nom + '.' +
      element.extension, this.eleve.nom + '-' + this.eleve.prenom).subscribe( res => {
      switch (element.extension) {
        case 'pdf':
          this.blob = new Blob([res], {type: 'application/pdf'});
          this.urlFile = URL.createObjectURL(this.blob);
          window.open(this.urlFile);
          break;
        case 'jpg':
          this.blob = new Blob([res], {type: 'image/jpeg'});
          this.urlFile = URL.createObjectURL(this.blob);
          window.open(this.urlFile);
          break;
        case 'jpeg':
          this.blob = new Blob([res], {type: 'image/jpeg'});
          this.urlFile = URL.createObjectURL(this.blob);
          window.open(this.urlFile);
          break;
        case 'png':
          this.blob = new Blob([res], {type: 'image/png'});
          this.urlFile = URL.createObjectURL(this.blob);
          window.open(this.urlFile);
          break;
        default:
          this.openFile(element);
      }
    });
  }
  openFile(element: Document) {
    this.fileService.getFile(element.nom + '.' +
      element.extension, this.eleve.nom + '-' + this.eleve.prenom).subscribe( res => {
      this.blob = new Blob([res]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.blob);
      link.download = element.nom + '.' + element.extension;
      link.click();
    });
  }
  deleteFile(element: Document) {
    this.modalRef = this.modalService.show(FileDeleteModalComponent, {data: {eleve: this.eleve, doc: element}});
    this.modalService.close.subscribe( res => {
      this.ngOnInit();
    });
  }
  updateEleve() {
    this.eleveServ.updateEleve(this.eleve).subscribe();
  }
  reunionEleve() {
    this.modalRef = this.modalService.show(ReunionModalComponent, {data: {eleve: this.eleve}});
    this.modalService.close.subscribe( res => {
      this.ngOnInit();
    });
  }
  vuEleve() {
    this.eleve.vu = true;
    this.eleveServ.updateEleve(this.eleve).subscribe();
  }
  nonvuEleve() {
    this.eleve.vu = false;
    this.eleveServ.updateEleve(this.eleve).subscribe();
  }
  listMails() {
    this.modalRef = this.modalService.show(MailListModalComponent, {data: {eleve: this.eleve}});
    this.modalService.close.subscribe( res => {
      this.ngOnInit();
    });
  }
}
