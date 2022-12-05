const Employee = require('./employee');

// importing class of employee
class Engineer extends Employee {
  constructor({ name, id, email, github}) {
    super({name, id, email});
    this.github = github;
    this.role = 'Engineer'
  }
  // get the name input from user
  getName() {
    return this.name;
  }
  // get the Id input from user
  getId() {
    return this.id;
  }
  // get the Email input from user
  getEmail() {
    return this.email;
  }
  // get github username input 
  getGithub(){
    return this.github;
  }
  // get role for Engineer & returns Engineer 
  getRole(){
    return this.role
  }
}
// export module
module.exports = Engineer;
