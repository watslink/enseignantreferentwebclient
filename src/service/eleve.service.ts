import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Eleve} from '../model/Eleve.model';


@Injectable()
export class EleveService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListEleve(ensRefId: number): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.host + '/eleves/' + ensRefId);
  }
  getListEleveInscrits(ensRefId: number): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.host + '/eleves/inscrits/' + ensRefId);
  }
  getListEleveNonInscrits(ensRefId: number): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.host + '/eleves/noninscrits/' + ensRefId);
  }
  getListEleveVus(ensRefId: number): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.host + '/eleves/vus/' + ensRefId);
  }
  getListEleveNonVus(ensRefId: number): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.host + '/eleves/nonvus/' + ensRefId);
  }
  getEleve(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(this.host + '/eleve/' + id);
  }
  validateInscription(eleve: Eleve) {
    return this.http.post(this.host + '/elevevalidate', eleve, {observe: 'response'});
  }
  addEleve(eleve: Eleve) {
    return this.http.post(this.host + '/eleve', eleve, {observe: 'response'});
  }
  updateEleve(eleve: Eleve) {
    return this.http.put(this.host + '/eleve', eleve, {observe: 'response'});
  }
  deleteEleve(id: number) {
    return this.http.delete(this.host + '/eleve/' + id, {observe: 'response'} );
  }
}
