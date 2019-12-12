import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../model/Eleve.model';
import {EleveDocumentInscriptionRequis} from '../../model/EleveDocumentInscriptionRequis.model';
import {Document} from '../../model/Document.model';
import {Categorie} from '../../model/Categorie.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {FileService} from '../../service/file.service';
import {EleveService} from '../../service/eleve.service';
import {CategorieService} from '../../service/categorie.service';

@Component({
  selector: 'app-reunion-modal',
  templateUrl: './reunion-modal.component.html',
  styleUrls: ['./reunion-modal.component.css']
})
export class ReunionModalComponent implements OnInit {

  eleve: Eleve;

  constructor(public modalRef: MDBModalRef,
              private eleveService: EleveService) { }

  ngOnInit() {}
  save() {
    this.eleveService.updateEleve(this.eleve).subscribe();
    this.modalRef.hide();
  }
}
