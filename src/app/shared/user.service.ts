import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url : "http://localhost:3000";
  public logueado:boolean = false;
  public user:User;                                   // Hay que poner que es un array aquí?

  constructor( public http:HttpClient ) { }

  public register(user:User) {

    console.log('Ususario recibido del formulario en el servicio: ' + user);
    
    return this.http.post(this.url + "/" + "register", user);

  };

  public login(user:User) {

    // console.log('Ususario que intenta acceder a la web: ' + this.user.nombreCompleto());
    console.log('Ususario que intenta acceder a la web: ' + user);

    return this.http.post(this.url + "/" + "login", user);
    
  };

}

// User{
//   name: "Nerea", last_name: "Campos", email: "uniEstudia@gmail.es", photo: "https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?w=500&ssl=1", password: "333123TYU"
// }
