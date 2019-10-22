import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Structure} from '../model/Structure.model';


@Injectable()
export class StructureService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListStructure(ensRefId: number): Observable<Structure[]> {
    return this.http.get<Structure[]>(this.host + '/structurePros/' + ensRefId);
  }
  getStructure(id: number): Observable<Structure> {
    return this.http.get<Structure>(this.host + '/structurePro/' + id);
  }
  addStructure(structure: Structure) {
    return this.http.post(this.host + '/structurePro', structure, {observe: 'response'});
  }
  updateStructure(structure: Structure) {
    return this.http.put(this.host + '/structurePro', structure);
  }
  deleteStructure(id: number) {
    return this.http.delete(this.host + '/structurePro/' + id, {observe: 'response'} );
  }
}
