import {EnseignantReferent} from './EnseignantReferent.model';

export class Niveau {

  public niveauId: number;
  public libelle: string;
  public degre: number;
  public specialise: boolean;
  public enseignantReferent: EnseignantReferent;

  constructor() {}


}
