import {Component, OnInit} from '@angular/core';
import {Categorie} from '../../../model/Categorie.model';
import {MDBModalRef} from 'angular-bootstrap-md';
import {CategorieService} from '../../../service/categorie.service';
import {Adresse} from '../../../model/Adresse.model';

@Component({
  selector: 'app-categorie-add-modal',
  templateUrl: './categorie-add-modal.component.html',
  styleUrls: ['./categorie-add-modal.component.css']
})
export class CategorieAddModalComponent implements OnInit {
  categorie: Categorie;
  constructor(public modalRef: MDBModalRef, private categorieServ: CategorieService) { }

  ngOnInit() {
    this.categorie = new Categorie();
  }

  save() {
    this.categorieServ.addCategorie(this.categorie).subscribe();
    this.modalRef.hide();
  }
}

