import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DocumentInscriptionRequis} from '../model/DocumentInscriptionRequis.model';


@Injectable()
export class DocumentInscriptionRequisService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }

  getListDocumentInscriptionRequis(ensRefId: number): Observable<DocumentInscriptionRequis[]> {
    return this.http.get<DocumentInscriptionRequis[]>(this.host + '/documentInscriptionRequiss/' + ensRefId);
  }
  getDocumentInscriptionRequis(id: number): Observable<DocumentInscriptionRequis> {
    return this.http.get<DocumentInscriptionRequis>(this.host + '/documentInscriptionRequis/' + id);
  }
  addDocumentInscriptionRequis(documentInscriptionRequis: DocumentInscriptionRequis) {
    return this.http.post(this.host + '/documentInscriptionRequis', documentInscriptionRequis, {observe: 'response'});
  }
  updateDocumentInscriptionRequis(documentInscriptionRequis: DocumentInscriptionRequis) {
    return this.http.put(this.host + '/documentInscriptionRequis', documentInscriptionRequis, {observe: 'response'});
  }
  deleteDocumentInscriptionRequis(id: number) {
    return this.http.delete(this.host + '/documentInscriptionRequis/' + id, {observe: 'response'} );
  }
}
