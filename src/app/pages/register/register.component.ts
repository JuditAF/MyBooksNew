import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: User;
  userLoginOn:boolean = false;

  constructor (public userService: UserService) {

    this.userLoginOn = this.userService.logueado;
    
  };

  ngOnInit(): void {
    
  }

}
