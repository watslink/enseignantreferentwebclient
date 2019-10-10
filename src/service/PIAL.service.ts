import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PIAL} from '../model/PIAL.model';


@Injectable()
export class PIALServiceService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListPIAL(): Observable<PIAL[]> {
    return this.http.get<PIAL[]>(this.host + '/pials');
  }
  getPIAL(id: number): Observable<PIAL> {
    return this.http.get<PIAL>(this.host + '/pial/' + id);
  }
  addPIAL(structure: PIAL) {
    return this.http.post(this.host + '/pial/', structure, {observe: 'response'});
  }
  updatePIAL(structure: PIAL) {
    return this.http.put(this.host + '/pial/', structure, {observe: 'response'});
  }
  deletePIAL(id: number) {
    return this.http.delete(this.host + '/pial/' + id, {observe: 'response'} );
  }
}
