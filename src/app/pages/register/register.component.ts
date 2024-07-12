import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user: User;

  constructor (public userService: UserService) {

    this.userService.registrarse().subscribe((respuesta: Respuesta) => {
      this.user = respuesta.data;
      console.log(respuesta.data);
      console.log(this.user);
      
    });

  };

  public registrarse(user:User) {
  
    this.userService.register(this.user).subscribe((respuesta: Respuesta) => {
      this.user = respuesta.data;
    });
   
  }

}
