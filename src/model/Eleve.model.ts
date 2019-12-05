import {Niveau} from './Niveau.model';
import {Etablissement} from './Etablissement.model';
import {AESH} from './AESH.model';
import {EnseignantReferent} from './EnseignantReferent.model';
import {RepresentantLegal} from './RepresentantLegal.model';
import {Structure} from './Structure.model';
import {MaterielPedagoAdapte} from './MaterielPedagoAdapte.model';
import {Document} from './Document.model';
import {EleveDocumentInscriptionRequis} from './EleveDocumentInscriptionRequis.model';

export class Eleve {

  public eleveId: number;
  public nom: string;
  public prenom: string;
  public dateNaissance: Date;
  public dateReunion: Date;
  public vu: boolean;
  public commentaire: string;
  public niveau: Niveau;
  public etablissement: Etablissement;
  public aesh: AESH;
  public dateNotificationAesh: Date;
  public enseignantReferent: EnseignantReferent;
  public listRepresentantsLegaux: RepresentantLegal[];
  public listStructurePros: Structure[];
  public listMaterielsPedagoAdaptes: MaterielPedagoAdapte[];
  public listDocuments: Document[];
  public listEleveDocumentsInscriptionRequis: EleveDocumentInscriptionRequis[];

  constructor() {}
}
