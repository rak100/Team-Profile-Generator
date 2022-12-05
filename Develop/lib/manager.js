
const Employee = require('./employee');

class Manager extends Employee{
  constructor({name, id, email, officeNumber}){
    super({name, id, email})
    this.officeNumber = officeNumber;
    this.role = 'Manager';
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
  getOfficeNumber(){
    return this.officeNumber
  }
  // get role for manager & returns manager
  getRole() {
    return this.role
  }
}
module.exports = Manager;
