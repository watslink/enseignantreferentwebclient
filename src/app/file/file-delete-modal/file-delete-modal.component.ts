import { Component, OnInit } from '@angular/core';
import {Etablissement} from '../../../model/Etablissement.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {EtablissementService} from '../../../service/etablissement.service';
import {FileService} from '../../../service/file.service';
import {Eleve} from '../../../model/Eleve.model';
import {EleveService} from '../../../service/eleve.service';
import {Document} from '../../../model/Document.model';

@Component({
  selector: 'app-file-delete-modal',
  templateUrl: './file-delete-modal.component.html',
  styleUrls: ['./file-delete-modal.component.css']
})
export class FileDeleteModalComponent implements OnInit {

  doc: Document;
  eleve: Eleve;
  constructor(public modalRef: MDBModalRef, private fileServ: FileService, private eleveServ: EleveService) { }
  ngOnInit() {
  }

  delete() {
    this.fileServ.deleteFile(this.doc.nom + '.' + this.doc.extension, this.eleve.nom +
      '-' + this.eleve.prenom).subscribe( res => {
          for (const doc of this.eleve.listDocuments) {
            if (doc.documentId === this.doc.documentId) {
              this.eleve.listDocuments.splice(this.eleve.listDocuments.indexOf(doc, 1));
              this.eleveServ.updateEleve(this.eleve).subscribe();
          }
        }
    });
    this.modalRef.hide();
  }
}
