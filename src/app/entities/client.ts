export class Client {
    id: number
    nomDeFamille: string
    prenom: string
    telephone: string
    constructor(
        id: number,
        nomDeFamille: string,
        prenom: string,
        telephone: string
    ) {
        this.id = id
        this.nomDeFamille = nomDeFamille
        this.prenom = prenom
        this.telephone = telephone
    }
}
