// creating class for employee 
class Employee{
    constructor({name, id, email}) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // get the name input from user 
getName(){
    return this.name
}
// get the Id input from user 
getId(){
    return this.id
}
// get the Email input from user 
getEmail(){
    return this.email
}
// get role for Employee & returns Employee 
getRole(){
    return 'Employee'
}
}
// export module 
module.exports = Employee;