const { TestWatcher } = require("jest");
const Employee = require("../lib/Employee");

test("new employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("set name from constructor", () => {
    const name = "Arianna";
    const e = new Employee(name);
});

test("set id from constructor", ()=> {
    const testValue = 80;
    const e = new Employee("Adam", testValue);
    expect(e.id).toBe(testValue);
});

test("set email from constructor", () =>{
    const testValue = "test@test.com";
    const e = new Employee("Adam", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("get name from getName()", () => {
    const testValue = "Arianna";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("get id from getId()", () => {
    const testValue = 80;
    const e = new Employee("Adam", testValue);
    expect(e.getId).toBe(testValue);
});

test("get email from getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Adam", 1, testValue);
    expect(e.getEmail).toBe(testValue);
});

test("return of getRole()",() => {
    const testValue = "Employee";
    const e = new Employee("Arianna", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});