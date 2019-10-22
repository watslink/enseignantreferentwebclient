import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorie} from '../model/Categorie.model';


@Injectable()
export class CategorieService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListCategorie(ensRefId: number): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.host + '/categories/' + ensRefId);
  }
  getCategorie(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.host + '/categorie/' + id);
  }
  addCategorie(categorie: Categorie) {
    return this.http.post(this.host + '/categorie', categorie, {observe: 'response'});
  }
  updateCategorie(categorie: Categorie) {
    return this.http.put(this.host + '/categorie', categorie, {observe: 'response'});
  }
  deleteCategorie(id: number) {
    return this.http.delete(this.host + '/categorie/' + id, {observe: 'response'} );
  }
}
