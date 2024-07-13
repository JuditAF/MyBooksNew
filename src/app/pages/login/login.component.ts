import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User;

  constructor (public userService: UserService) {

    // this.userService.iniciarSesion().subscribe((respuesta: Respuesta) => {
    //   this.user = respuesta.data;
    //   console.log(respuesta.data);
    //   console.log(this.user);
      
    // });

  };

  // public iniciarSesion(user:User) {
  //   console.log(user);
    
  //   if (user){
      
  //     this.userService.getOne(Number(id_user)).subscribe((respuesta: Respuesta) => {
  //       this.user = respuesta.data;
  //     });
  //     console.log(this.user);
      
  //   } else {
      
  //     this.userService.getAll().subscribe((respuesta: Respuesta) => {
  //       this.user = respuesta.data;
  //     });
  //   }
  
  //   this.userService.login(this.user).subscribe((respuesta: Respuesta) => {
  //     this.user = respuesta.data;
  //   });
   
  // }

}
