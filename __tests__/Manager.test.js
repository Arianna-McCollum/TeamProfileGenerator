const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number from constructor", () =>{
    const testValue = 100; 
    const e = new Manager("Adam", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() return "manager"', () => {
    const testValue = "Manager";
    const e = new Manager("Adam", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("get office number from getOfficeNumber()", () => {
    const testValue = 80;
    const e = new Manager("Adam", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});