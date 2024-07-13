import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : string;
  public logueado:boolean = false;
  public user:User;

  constructor( public http:HttpClient ) { }

  public register(user:User) {

    this.url = "http://localhost:3000/register";
    return this.http.get(this.url);

  };

  public login(user:User) {

    this.url = "http://localhost:3000/login";
    return this.http.get(this.url);
    
  };

}

// User{
//   name: "Nerea", last_name: "Campos", email: "uniEstudia@gmail.es", photo: "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?w=500&ssl=1", password: "333123TYU"
// }
