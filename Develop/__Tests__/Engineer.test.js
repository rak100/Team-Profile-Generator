const Engineer = require('../lib/engineer');
const engineer = new Engineer("Rana", "10913", "ahmadus10@iclud.com", "rak100");

//check that the user can get the key.values of the from the constructor
test('it should get the constructor object values of engineer', () => {
    expect(engineer.name).toBe("Rana"), expect(engineer.id).toBe("10913");
    expect(engineer.email).toBe("ahmadus10@iclud.com");
    expect(engineer.github).toBe("rak100");
}
);

//check that the user can get the name from getName() method
test('it should return the name from the getName() method', () => {
    expect(engineer.getName).toBe('Rana');
}
);

//check that the user can get the ID from getId() method
test('it should return the id number from the getId() method', () => {
    expect(engineer.getId()).toBe("10913");
}
);

//check that the user can get the ID from getId() method
test('it should return email from the getEmail() method', () =>
{
expect(engineer.getEmail()).toBe("ahmadus10@iclud.com");
});

//check that the user can get the Github username from getGithub() method
test('it should return github username from the getGithub() method', () =>
{
expect(engineer.getGithub()).toBe("rak100");
});

//check that the user can get role from getRole() method
test('it should return role "Engineer" from the getRole() method', () =>
{
expect(engineer.getRole()).toBe("Engineer");
});
