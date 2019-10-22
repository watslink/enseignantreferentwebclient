import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MaterielPedagoAdapte} from '../model/MaterielPedagoAdapte.model';


@Injectable()
export class MaterielPedagoAdapteService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListMaterielPedagoAdapte(ensRefId: number): Observable<MaterielPedagoAdapte[]> {
    return this.http.get<MaterielPedagoAdapte[]>(this.host + '/materielPedagoAdaptes/' + ensRefId);
  }
  getMaterielPedagoAdapte(id: number): Observable<MaterielPedagoAdapte> {
    return this.http.get<MaterielPedagoAdapte>(this.host + '/materielPedagoAdapte/' + id);
  }
  addMaterielPedagoAdapte(materielPedagoAdapte: MaterielPedagoAdapte) {
    return this.http.post(this.host + '/materielPedagoAdapte', materielPedagoAdapte, {observe: 'response'});
  }
  updateMaterielPedagoAdapte(materielPedagoAdapte: MaterielPedagoAdapte) {
    return this.http.put(this.host + '/materielPedagoAdapte', materielPedagoAdapte, {observe: 'response'});
  }
  deleteMaterielPedagoAdapte(id: number) {
    return this.http.delete(this.host + '/materielPedagoAdapte/' + id, {observe: 'response'} );
  }
}
