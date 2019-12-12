import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../model/Eleve.model';
import {Location} from '@angular/common';
import {EleveDocumentInscriptionRequis} from '../../../model/EleveDocumentInscriptionRequis.model';
import {FileAddModalComponent} from '../../file/file-add-modal/file-add-modal.component';
import {FileViewerModalComponent} from '../../file/file-viewer-modal/file-viewer-modal.component';
import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {faDownload, faTimes} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {EleveService} from '../../../service/eleve.service';
import {FileService} from '../../../service/file.service';
import {Document} from '../../../model/Document.model';
import {FileDeleteModalComponent} from '../../file/file-delete-modal/file-delete-modal.component';
import {Categorie} from '../../../model/Categorie.model';
import {CategorieService} from '../../../service/categorie.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


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
  constructor(private eleveServ: EleveService,
              private modalService: MDBModalService,
              private fileService: FileService,
              private categorieService: CategorieService,
              private location: Location) { }

  ngOnInit() {
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
      this.modalRef = this.modalService.show(FileViewerModalComponent, {data: {fileUrl: res}});
    });
  }
  openFile(element: Document) {
    this.fileService.getFile(element.nom + '.' +
      element.extension, this.eleve.nom + '-' + this.eleve.prenom).subscribe( res => {
      const blob = new Blob([res]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
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
  newReunion() {
  }
  vuEleve() {
    this.eleve.vu = true;
    this.eleveServ.updateEleve(this.eleve).subscribe();
  }
  nonvuEleve() {
    this.eleve.vu = false;
    this.eleveServ.updateEleve(this.eleve).subscribe();
  }
}
