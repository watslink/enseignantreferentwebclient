import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../model/Eleve.model';

import {MDBModalRef, MDBModalService} from 'angular-bootstrap-md';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {EleveService} from '../../../service/eleve.service';

import {FileService} from '../../../service/file.service';

import {EleveDocumentInscriptionRequis} from '../../../model/EleveDocumentInscriptionRequis.model';
import {FileAddModalComponent} from '../../file/file-add-modal/file-add-modal.component';
import {FileViewerModalComponent} from '../../file/file-viewer-modal/file-viewer-modal.component';
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
      this.modalRef = this.modalService.show(FileViewerModalComponent, {data: {fileUrl: res}});
    });
  }
  openFile(edir: EleveDocumentInscriptionRequis) {
    this.fileService.getFile(edir.documentInscriptionRequis.nom + '.' +
      edir.extension, this.eleve.nom + '-' + this.eleve.prenom).subscribe( res => {
      const blob = new Blob([res]);
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = edir.documentInscriptionRequis.nom + '.' + edir.extension;
      link.click();
    });
  }
}
