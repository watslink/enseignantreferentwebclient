import {Component, OnInit} from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FileService} from '../../../service/file.service';
import {Eleve} from '../../../model/Eleve.model';
import {EleveDocumentInscriptionRequis} from '../../../model/EleveDocumentInscriptionRequis.model';
import {EleveService} from '../../../service/eleve.service';
import {Document} from '../../../model/Document.model';
import {Categorie} from '../../../model/Categorie.model';
import {CategorieService} from '../../../service/categorie.service';
import {PIAL} from '../../../model/PIAL.model';


@Component({
  selector: 'app-file-add-modal',
  templateUrl: './file-add-modal.component.html',
  styleUrls: ['./file-add-modal.component.css']
})
export class FileAddModalComponent implements OnInit {
  fileToUpload: File;
  eleve: Eleve;
  eleveDocRequis: EleveDocumentInscriptionRequis;
  doc: Document;
  newDoc: Document;
  type;
  categories: Categorie[];
  constructor(public modalRef: MDBModalRef,
              private fileService: FileService,
              private eleveService: EleveService,
              private categoieService: CategorieService
              ) { }

  ngOnInit() {
    if (this.type === 'addDoc') {
      this.newDoc = new Document();
    }
    this.categoieService.getListCategorie(parseInt(localStorage.getItem('idEnsRef'), 10)).subscribe( res => {
      this.categories = res;
    });
  }

  compareFnCategorie(c1: Categorie, c2: Categorie): boolean {
    return c1 && c2 ? c1.categorieId === c2.categorieId : c1 === c2;
  }

  save() {
    const eleveDirectory = this.eleve.nom + '-' + this.eleve.prenom;
    if (this.type === 'eleveDocRequis') {
      this.fileService.addFile(this.fileToUpload,
        eleveDirectory, this.eleveDocRequis.documentInscriptionRequis.nom).subscribe(res => {
        for (const eleveDocReq of this.eleve.listEleveDocumentsInscriptionRequis) {
          if (eleveDocReq.documentInscriptionRequis === this.eleveDocRequis.documentInscriptionRequis) {
            eleveDocReq.extension = this.fileToUpload.name.substr(this.fileToUpload.name.lastIndexOf('.') + 1);
            eleveDocReq.ok = true;
            this.eleveService.updateEleve(this.eleve).subscribe();
          }
        }
      });
    }
    if (this.type === 'addDoc') {
      this.fileService.addFile(this.fileToUpload,
        eleveDirectory, this.newDoc.nom).subscribe(res => {
        this.newDoc.extension = this.fileToUpload.name.substr(this.fileToUpload.name.lastIndexOf('.') + 1);
        this.eleve.listDocuments.push(this.newDoc);
        this.eleveService.updateEleve(this.eleve).subscribe();
      });
    }
    this.modalRef.hide();
  }

  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
  }
}

