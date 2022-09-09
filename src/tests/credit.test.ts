import Credit from '../trip/credit';
import { SAPStub } from '../trip/sap.interface';

describe('Credit Test', () => {

    it('วงเงินสินเชื่อ 100,000 ใช้ไป 70,000 ขอใช้เพิ่ม 20,000 ผลการอนุมัติ ผ่าน', () => {
        const expectedResult = true;
        let sapStub = new SAPStub(100000, 70000);
        let credit = new Credit(sapStub);

        // Act
        const actualResult = credit.RequestForApproval("11441", 20000);

        // Assert
        expect(actualResult).toBe(expectedResult);
    });

    it('วงเงินสินเชื่อ 100,000 ใช้ไป 80,000 ขอใช้เพิ่ม 20,000 ผลการอนุมัติ ผ่าน', () => {
        const expectedResult = true;
        let sapStub = new SAPStub(100000, 80000);
        let credit = new Credit(sapStub);

        // Act
        const actualResult = credit.RequestForApproval("15320", 20000);

        // Assert
        expect(actualResult).toBe(expectedResult);
    });

    it('วงเงินสินเชื่อ 100,000 ใช้ไป 50,000 ขอใช้เพิ่ม 60,000 ผลการอนุมัติ ผ่าน', () => {
        const expectedResult = false;
        let sapStub = new SAPStub(100000, 50000);
        let credit = new Credit(sapStub);

        // Act
        const actualResult = credit.RequestForApproval("15320", 60000);

        // Assert
        expect(actualResult).toBe(expectedResult);
    });
});