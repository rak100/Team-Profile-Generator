const Employee = require('../lib/employee');
const employee = new Employee('Rana', '10913','ahmadus10@iclud.com');

//check that the user can get the key.values of the from the constructor
test('it should get the constructor object values of employee', () => {
    expect(employee.name).toBe("Rana"), expect(employee.id).toBe("10913");
    expect(employee.email).toBe("ahmadus10@iclud.com");
}
);

//check that the user can get the name from getName() method
test('it should return the name from the getName() method', () => {
    expect(employee.getName).toBe('Rana');
}
);

//check that the user can get the ID from getId() method
test('it should return the id number from the getId() method', () => {
    expect(employee.getId()).toBe("10913");
}
);

//check that the user can get the ID from getId() method
test('it should get return email from the getEmail() method', () =>
{
expect(employee.getEmail()).toBe("ahmadus10@iclud.com");
});

//check that the user can get role from getRole() method
test('it should get return role "Employee" from the getRole() method', () =>
{
expect(employee.getRole()).toBe("Employee");
});