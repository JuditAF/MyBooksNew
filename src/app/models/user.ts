export class User {

    public myUser : User

    constructor (public name:string, 
                 public last_name:string, 
                 public email: string, 
                 public photo: string, 
                 public password:string = " ",
                 public id_user: number = 0) {}

    public nombreCompleto (): string {
        return this.name + " " + this.last_name;
    }
}
