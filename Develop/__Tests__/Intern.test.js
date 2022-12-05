const Intern = require("../lib/intern");
const intern = new Intern("Rana", "10913", "ahmadus10@iclud.com", "Columbia University");

//check that the user can get the key.values of the from the constructor
test('it should get the constructor object values of intern', () => {
    expect(intern.name).toBe("Rana"), expect(intern.id).toBe("10913");
    expect(intern.email).toBe("ahmadus10@iclud.com");
    expect(intern.school).toBe("Columbia University");
}
);

//check that the user can get the name from getName() method
test('it should return the name from the getName() method', () => {
    expect(intern.getName).toBe('Rana');
}
);

//check that the user can get the ID from getId() method
test('it should return the id number from the getId() method', () => {
    expect(intern.getId()).toBe("10913");
}
);

//check that the user can get the ID from getId() method
test('it should return email from the getEmail() method', () =>
{
expect(intern.getEmail()).toBe("ahmadus10@iclud.com");
});

//check that the user can get school name from getSchool() method
test('it should return school name from the getSchool() method', () =>
{
expect(intern.getSchool()).toBe("Columbia University");
});

//check that the user can get role from getRole() method
test('it should return role "intern" from the getRole() method', () =>
{
expect(intern.getRole()).toBe("intern");
});
