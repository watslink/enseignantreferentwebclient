import {Adresse} from './Adresse.model';
import {EnseignantReferent} from './EnseignantReferent.model';

export class Structure {

  public structureProId: number;
  public nom: string;
  public specialite: string;
  public mail: string;
  public telephone: string;
  public adresse: Adresse;
  public enseignantReferent: EnseignantReferent;

  constructor() {}


}
