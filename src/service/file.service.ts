import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Etablissement} from '../model/Etablissement.model';
import {EleveDocumentInscriptionRequis} from '../model/EleveDocumentInscriptionRequis.model';
import {Categorie} from '../model/Categorie.model';


@Injectable()
export class FileService {

  private host = 'http://localhost:8080';


  constructor(private http: HttpClient) {

  }
  addFile(file: File, eleveDirectory: string, nomFichier: string) {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('eleveDirectory', eleveDirectory);
    formdata.append('nomFichier', nomFichier);

    const headers = new HttpHeaders();
    delete headers['Content-Type'];
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.host + '/files', formdata,  { headers, observe: 'response'});
  }
  getFile(nomFichier: string, eleveDirectory: string): any {
    const formdata: FormData = new FormData();

    formdata.append('nomFichier', nomFichier);
    formdata.append('eleveDirectory', eleveDirectory);
    return this.http.post(this.host + '/filesDownload', formdata, { responseType: 'blob' });
  }
  deleteFile(nomFichier: string, eleveDirectory: string) {
    const formdata: FormData = new FormData();

    formdata.append('nomFichier', nomFichier);
    formdata.append('eleveDirectory', eleveDirectory);
    return this.http.post(this.host + '/filesDelete', formdata, {observe: 'response'});
  }
}
