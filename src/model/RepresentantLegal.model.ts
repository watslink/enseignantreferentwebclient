import {Adresse} from './Adresse.model';
import {EnseignantReferent} from './EnseignantReferent.model';



export class RepresentantLegal {
  public representantLegalId: number;
  public identite: string;
  public telephone: string;
  public mail: string;
  public adresse: Adresse;
  public enseignantReferent: EnseignantReferent;

  constructor() {}


}
