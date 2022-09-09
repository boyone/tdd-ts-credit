export interface SAP {
    getCreditLimit(customerCode: string): CreditLimit;
}

class CreditLimit {
    constructor(public customerCredit: number, public usedCredit: number) {

    }
}

export class SAPStub implements SAP {
    constructor(public customerCredit: number, public usedCredit: number) {

    }
    getCreditLimit(customerCode: string): CreditLimit {
        return new CreditLimit(this.customerCredit, this.usedCredit)
    }

}