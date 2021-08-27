const Engineer = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Set school from constructor", () =>{
    const testValue = "UCF"; 
    const e = new Intern("Adam", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test('getRole() return "Intern"', () => {
    const testValue = "Intern";
    const e = new Intern("Adam", 1, "test@test.com", "UCF");
    expect(e.getRole()).toBe(testValue);
});

test("get school from getSchool()", () => {
    const testValue = "UCF";
    const e = new Intern("Adam", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});