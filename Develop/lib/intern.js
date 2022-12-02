// creating class for intern
class Intern {
  constructor({ name, id, email, school }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
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
    return 'Intern'
  }
}
// export module
module.exports = Intern;
