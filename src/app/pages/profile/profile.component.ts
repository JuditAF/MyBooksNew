import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

public myUser: User;

constructor () {

  this.myUser = new User ("Alahna", "De la Vega Cruz", "zHouseBlack@gmail.com", "https://www.pronto.es/files/main_image/uploads/2023/11/06/654915d5918cc.webp", "123abcdZ", 7);
  
}

  public modificar (nuevoNombre: string, nuevoApellido: string, nuevoEmail: string, nuevaFoto: string) {
    this.myUser = new User (nuevoNombre, nuevoApellido, nuevoEmail, nuevaFoto, " ");
    console.log(this.myUser.name);
}

}
