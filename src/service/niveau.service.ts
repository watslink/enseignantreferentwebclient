import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Niveau} from '../model/Niveau.model';


@Injectable()
export class NiveauService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListNiveau(): Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.host + '/niveaux');
  }
  getNiveau(id: number): Observable<Niveau> {
    return this.http.get<Niveau>(this.host + '/niveau/' + id);
  }
  addNiveau(niveau: Niveau) {
    return this.http.post(this.host + '/niveau/', niveau, {observe: 'response'});
  }
  updateNiveau(niveau: Niveau) {
    return this.http.put(this.host + '/niveau/', niveau, {observe: 'response'});
  }
  deleteNiveau(id: number) {
    return this.http.delete(this.host + '/niveau/' + id, {observe: 'response'} );
  }
}
