import {Adresse} from './Adresse';
import {PIAL} from './PIAL';

export class Etablissement {

  public etablissementId: number;
  public nom: string;
  public rne: string;
  public mail: string;
  public telephone: string;
  public adresse: Adresse;
  public pial: PIAL;

  constructor() {}


}