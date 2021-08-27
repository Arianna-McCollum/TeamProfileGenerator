const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Set github from constructor", () =>{
    const testValue = "GitHubUser"; 
    const e = new Engineer("Adam", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() return "Engineer"', () => {
    const testValue = "Engineer";
    const e = new Engineer("Adam", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("get GitHub from getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Adam", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});