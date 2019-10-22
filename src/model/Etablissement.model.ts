import {Adresse} from './Adresse.model';
import {PIAL} from './PIAL.model';
import {EnseignantReferent} from './EnseignantReferent.model';


export class Etablissement {

  public etablissementId: number;
  public nom: string;
  public rne: string;
  public mail: string;
  public telephone: string;
  public adresse: Adresse;
  public pial: PIAL;
  public enseignantReferent: EnseignantReferent;

  constructor() {}


}
