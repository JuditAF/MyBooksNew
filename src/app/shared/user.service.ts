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

    // this.url = "http://localhost:3000/register";
     // return this.http.get(this.url);
  };

  public login(user:User) {

    // const user: User = { "name", "last_name", "email", "photo", "password", "id_user" } ;

    this.url = "http://localhost:3000/login";
    return this.http.get(this.url + "/" + id_user, email);
  };

}
