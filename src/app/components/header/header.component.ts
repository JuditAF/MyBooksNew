import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoginOn:boolean = false;

  constructor (public userService: UserService) {

    this.userLoginOn = this.userService.logueado;
    
   }

  ngOnInit(): void {
    
  }
  
}
