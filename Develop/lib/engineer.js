// creating class for engineer
class Engineer {
  constructor({ name, id, email, github }) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
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
    return 'Engineer'
  }
}
// export module
module.exports = Engineer;
