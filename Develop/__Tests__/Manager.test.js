const Manager = require("../lib/manager");
const manager = new Manager(
  "Rana",
  "10913",
  "ahmadus10@iclud.com",
  "110"
);

//check that the user can get the key.values of the from the constructor
test('it should get the constructor object values of manager', () => {
    expect(manager.name).toBe("Rana"), expect(manager.id).toBe("10913");
    expect(manager.email).toBe("ahmadus10@iclud.com");
    expect(manager.officeNumber).toBe("110");
}
);

//check that the user can get the name from getName() method
test('it should return the name from the getName() method', () => {
    expect(manager.getName).toBe('Rana');
}
);

//check that the user can get the ID from getId() method
test('it should return the id number from the getId() method', () => {
    expect(manager.getId()).toBe("10913");
}
);

//check that the user can get the ID from getId() method
test('it should return email from the getEmail() method', () =>
{
expect(manager.getEmail()).toBe("ahmadus10@iclud.com");
});

//check that the user can get office number from getOfficeNumber() method
test("it should return office number from the getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("110");
});

//check that the user can get role from getRole() method
test('it should return role "manager" from the getRole() method', () =>
{
expect(manager.getRole()).toBe("Manager");
});