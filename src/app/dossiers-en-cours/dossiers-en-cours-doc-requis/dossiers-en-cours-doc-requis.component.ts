import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../model/Eleve.model';

import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {EleveService} from '../../../service/eleve.service';

import {FileService} from '../../../service/file.service';

import {EleveDocumentInscriptionRequis} from '../../../model/EleveDocumentInscriptionRequis.model';
import {FileAddModalComponent} from '../../file/file-add-modal/file-add-modal.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-dossiers-en-cours-doc-requis',
  templateUrl: './dossiers-en-cours-doc-requis.component.html',
  styleUrls: ['./dossiers-en-cours-doc-requis.component.css']
})
export class DossiersEnCoursDocRequisComponent implements OnInit {

  eleve: Eleve;
  modalRef: MDBModalRef;
  faDown = faDownload;
  faView = faSearch;
  blob;
  urlFile;
  constructor(private eleveServ: EleveService,
              private modalService: MDBModalService,
              private fileService: FileService,
              private location: Location) { }

  ngOnInit() {
    this.eleve = history.state;
  }

  back() {
    this.location.back();
  }
  openFileModal(element: EleveDocumentInscriptionRequis) {
    this.modalRef = this.modalService.show(FileAddModalComponent,
      {data: {eleve: this.eleve, eleveDocRequis: element, type: 'eleveDocRequis'}});
    this.modalService.close.subscribe( res => {
      this.ngOnInit();
    });
  }
  viewFile(edir: EleveDocumentInscriptionRequis) {
    this.fileService.getFile(edir.documentInscriptionRequis.nom + '.' +
      edir.extension, this.eleve.nom + '-' + this.eleve.prenom).subscribe( res => {
      switch (edir.extension) {
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
          this.openFile(edir);
      }
  });
  }
  openFile(edir: EleveDocumentInscriptionRequis) {
    this.fileService.getFile(edir.documentInscriptionRequis.nom + '.' +
      edir.extension, this.eleve.nom + '-' + this.eleve.prenom).subscribe( res => {
      this.blob = new Blob([res]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(this.blob);
      link.download = edir.documentInscriptionRequis.nom + '.' + edir.extension;
      link.click();
    });
  }
}
