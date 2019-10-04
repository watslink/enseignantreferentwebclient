export class EnseignantReferent {


  constructor(
    public enseignantReferentId: number,
    public nom: string,
    public prenom: string,
    public mail: string,
    public motDePasse: string,
    public enabled: boolean) {}


}
