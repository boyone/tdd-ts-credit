import { SAP } from './sap.interface';

class Credit {
    constructor(private sap: SAP) { }

    public RequestForApproval(customerCode: string, tripAmount: number): boolean {
        const creditLimit = this.sap.getCreditLimit(customerCode);
        return creditLimit.customerCredit >= creditLimit.usedCredit + tripAmount;;
    }
}

export default Credit;