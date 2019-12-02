import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FileService} from '../../../service/file.service';
import {Eleve} from '../../../model/Eleve.model';
import {EleveDocumentInscriptionRequis} from '../../../model/EleveDocumentInscriptionRequis.model';
import {EleveService} from '../../../service/eleve.service';


@Component({
  selector: 'app-file-add-modal',
  templateUrl: './file-add-modal.component.html',
  styleUrls: ['./file-add-modal.component.css']
})
export class FileAddModalComponent implements OnInit {
  fileToUpload: File;
  eleve: Eleve;
  eleveDocRequis: EleveDocumentInscriptionRequis;
  constructor(public modalRef: MDBModalRef,
              private fileService: FileService,
              private eleveService: EleveService
              ) { }

  ngOnInit() {
  }

  save() {
    const eleveDirectory = this.eleve.nom + '-' + this.eleve.prenom;
    this.fileService.addFile(this.fileToUpload,
      eleveDirectory, this.eleveDocRequis.documentInscriptionRequis.nom).subscribe( res => {
      for (const eleveDocReq of this.eleve.listEleveDocumentsInscriptionRequis) {
        if (eleveDocReq.documentInscriptionRequis === this.eleveDocRequis.documentInscriptionRequis) {
          eleveDocReq.extension = this.fileToUpload.name.substr(this.fileToUpload.name.lastIndexOf ('.') + 1);
          eleveDocReq.ok = true;
          this.eleveService.updateEleve(this.eleve).subscribe();
        }

      }
    });
    this.modalRef.hide();
  }

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
  }
}

