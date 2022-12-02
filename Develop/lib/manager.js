// creating class for manager
class Manager {
  constructor({ name, id, email, officeNumber }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
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
  // get the office number input from user
  getofficeNumber(){
    return this.officeNumber
  }
  // get role for manager & returns manager
  getRole() {
    return "Manager";
  }
}
// export module
module.exports = Manager;
