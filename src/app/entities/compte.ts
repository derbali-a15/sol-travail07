export class Compte {
    id: number
    type: string
    solde: number
    constructor(id: number, type: string, solde: number) {
        this.id = id
        this.type = type
        this.solde = solde
    }
}
