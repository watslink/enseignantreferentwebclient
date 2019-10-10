import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AESH} from '../model/AESH.model';


@Injectable()
export class AESHServiceService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListAESH(): Observable<AESH[]> {
    return this.http.get<AESH[]>(this.host + '/aeshs');
  }
  getAESH(id: number): Observable<AESH> {
    return this.http.get<AESH>(this.host + '/aesh/' + id);
  }
  addAESH(structure: AESH) {
    return this.http.post(this.host + '/aesh/', structure, {observe: 'response'});
  }
  updateAESH(structure: AESH) {
    return this.http.put(this.host + '/aesh/', structure, {observe: 'response'});
  }
  deleteAESH(id: number) {
    return this.http.delete(this.host + '/aesh/' + id, {observe: 'response'} );
  }
}
