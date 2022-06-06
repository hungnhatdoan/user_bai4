enum Role {
    Admin = 1,
    User
}
export class User {
    private name: string;
    private email: string;
    public role: Role;
    constructor(name: string, email: string, role: Role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    get getName() {
        return this.name;
    }
    set setName(name: string) {
        this.name = name;
    }
    get getEmail() {
        return this.email;
    }
    set setEmail(email: string) {
        this.email = email;
    }
    get getRole() {
        return this.role;
    }
    set setRole(role: Role) {
        this.role = role;
    }
   get getInfo() {
       if ( this.role===1) {
        return `${this.name} is an admin`;
       } else {
        return `${this.name} is a user`;
       }
    }
}
       
   



    