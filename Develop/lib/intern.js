const Employee = require('./employee');

// creating class for intern
class Intern extends Employee {
  constructor({ name, id, email, school }) {
    super({name, id, email});
    this.school = school;
    this.role = 'Intern';
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
  // get school name input 
  getSchool(){
    return this.school;
  }
  // get role for Intern & returns Intern
  getRole(){
    return this.role
  }
}
// export module
module.exports = Intern;
