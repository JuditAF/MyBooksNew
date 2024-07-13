import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  @Input() user: User;


  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService: UserService) {

    const minPassLength = 8;

    this.registerForm = this.formBuilder.group({

      nombre: [, Validators.required],
      apellidos: [, Validators.required],
      email: [, [Validators.required, Validators.email]],
      url: [, Validators.required],
      password: [, [Validators.required, Validators.minLength(minPassLength)]],
      repetirPassword: [, [Validators.required, Validators.minLength(minPassLength), this.checkPasswords]],

    });
  }


  // nuevoUsuario(name: string, last_name: string, email: string, photo: string, password: string, id_user: number) {
  //   this.userService.user = new User(name, last_name, email, photo, password, id_user);
  //   console.log(this.userService.user);

  //   this.userService.registrarse().subscribe((respuesta: Respuesta) => {
  //     this.user = respuesta.data;
  //     console.log(respuesta.data);
  //     console.log(this.user);

  //   });

  // };

  // public registrarse(user:User) {
  
  //   this.userService.register(this.user).subscribe((respuesta: Respuesta) => {
  //     this.user = respuesta.data;
  //   });
   
  // }

  public register(name: string, last_name: string, email: string, photo: string, password: string) {
  
    this.userService.user = new User (name, last_name, email, photo, password);
    console.log(this.userService.user);
    this.registerForm.reset();

  };

  private checkPasswords(control: AbstractControl) {
    let res = { matchPassword: true };

    if (control.parent?.value.password == control.value)
      res = null;

    return res;
  };

}