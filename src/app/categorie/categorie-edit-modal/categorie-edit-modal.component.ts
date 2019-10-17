import { Component, OnInit } from '@angular/core';
import {MDBModalRef} from 'angular-bootstrap-md';
import {Categorie} from '../../../model/Categorie.model';
import {CategorieService} from '../../../service/categorie.service';

@Component({
  selector: 'app-categorie-edit-modal',
  templateUrl: './categorie-edit-modal.component.html',
  styleUrls: ['./categorie-edit-modal.component.css']
})
export class CategorieEditModalComponent implements OnInit {
  categorie: Categorie;
  constructor(public modalRef: MDBModalRef, private categorieServ: CategorieService) { }

  ngOnInit() {
  }

  save() {
    this.categorieServ.updateCategorie(this.categorie).subscribe();
    this.modalRef.hide();
  }
}
