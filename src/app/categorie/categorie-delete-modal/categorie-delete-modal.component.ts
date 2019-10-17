import { Component, OnInit } from '@angular/core';
import {Categorie} from '../../../model/Categorie.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {CategorieService} from '../../../service/categorie.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-categorie-delete-modal',
  templateUrl: './categorie-delete-modal.component.html',
  styleUrls: ['./categorie-delete-modal.component.css']
})
export class CategorieDeleteModalComponent implements OnInit {

  categorie: Categorie;
  constructor(public modalRef: MDBModalRef, private categorieServ: CategorieService) { }
  ngOnInit() {
  }

  delete() {
    this.categorieServ.deleteCategorie(this.categorie.categorieId).subscribe();
    this.modalRef.hide();
  }
}
