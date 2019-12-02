import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RepresentantLegal} from '../model/RepresentantLegal.model';


@Injectable()
export class RepresentantLegalService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListRepresentantLegal(ensRefId: number): Observable<RepresentantLegal[]> {
    return this.http.get<RepresentantLegal[]>(this.host + '/representantsLegaux/' + ensRefId);
  }
  getRepresentantLegal(id: number): Observable<RepresentantLegal> {
    return this.http.get<RepresentantLegal>(this.host + '/representantLegal/' + id);
  }
  addRepresentantLegal(representantLegal: RepresentantLegal) {
    return this.http.post(this.host + '/representantLegal', representantLegal, {observe: 'response'});
  }
  updateRepresentantLegal(representantLegal: RepresentantLegal) {
    return this.http.put(this.host + '/representantLegal', representantLegal);
  }
  deleteRepresentantLegal(id: number) {
    return this.http.delete(this.host + '/representantLegal/' + id, {observe: 'response'} );
  }
}
