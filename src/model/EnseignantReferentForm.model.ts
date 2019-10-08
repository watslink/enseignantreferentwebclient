export class EnseignantReferentForm {


  constructor(
    public nom: string,
    public prenom: string,
    public mail: string,
    public motDePasse: { mpd: string , rempd: string}
   ) {}


}
