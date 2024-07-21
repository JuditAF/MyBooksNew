
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { timeout } from 'rxjs';
import { Respuesta } from 'src/app/models/respuesta';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

@Input() user: User;

public registerForm: FormGroup;
// public user: User;

constructor (private formBuilder: FormBuilder, public userService: UserService, private toast:ToastrService) {

  const minPassLength = 8;

  this.registerForm = this.formBuilder.group({
    
    nombre: [, Validators.required],
    apellidos: [, Validators.required],
    email: [, [Validators.required, Validators.email]],
    url: [, Validators.required],
    password : [, [Validators.required, Validators.minLength(minPassLength)]],
    repetirPassword : [, [Validators.required, Validators.minLength(minPassLength), this.checkPasswords]],
  
  });
}

  public register () {
    const user = this.registerForm.value;
    console.log(user);

    this.userService.register(user).subscribe((respuesta: Respuesta) => {
      console.log(respuesta);

      if (respuesta.data != "-1") {
        this.toast.success('¡El usuario se ha registrado correctamente! ✌️')
        console.log(respuesta);
        
      } else {
        this.toast.warning('El usuario ya está registrado 📕')
      }

    this.registerForm.reset();
    });
  };

  private checkPasswords (control: AbstractControl){
    let respuesta = {matchPassword : true};

    if(control.parent?.value.password == control.value) { 
      respuesta = null;

      this.toast.error('La contraseña no coincide! ✒️')};

     return respuesta;
  };
  
}



  // nuevoUsuario(name: string, last_name: string, email: string, photo: string, password: string, id_user: number) {
  //   let user = new User(name, last_name, email, photo, password, id_user);
  //   console.log(user);

  //   this.userService.registrarse(user).subscribe((respuesta: Respuesta) => {
  //     if (-1 = respuesta.data) toast
      // else toast registrado
  //     console.log(respuesta.data);
  //     console.log(this.user);

  //   });

  // };