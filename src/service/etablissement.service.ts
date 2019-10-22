import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Etablissement} from '../model/Etablissement.model';


@Injectable()
export class EtablissementService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListEtablissement(ensRefId: number): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(this.host + '/etablissements/' + ensRefId);
  }
  getEtablissement(id: number): Observable<Etablissement> {
    return this.http.get<Etablissement>(this.host + '/etablissement/' + id);
  }
  addEtablissement(etablissement: Etablissement) {
    return this.http.post(this.host + '/etablissement', etablissement, {observe: 'response'});
  }
  updateEtablissement(etablissement: Etablissement) {
    return this.http.put(this.host + '/etablissement', etablissement, {observe: 'response'});
  }
  deleteEtablissement(id: number) {
    return this.http.delete(this.host + '/etablissement/' + id, {observe: 'response'} );
  }
}
