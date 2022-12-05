// creating class for employee 
class Employee{
    constructor({name, id, email}) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
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
getRole(){
    return this.role
}

}
// export module 
module.exports = Employee;