export class Operation {
    idCompte: number
    op: string
    // soldeCompte: number
    montantOp: number

    constructor(
        idCompte: number,
        op: string,
        // soldeCompte: number,
        montantOp: number
    ) {
        this.idCompte = idCompte
        this.op = op
        // this.soldeCompte = soldeCompte
        this.montantOp = montantOp
    }
}
