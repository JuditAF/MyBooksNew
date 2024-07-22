
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  // @Input() user: User;

  public registerForm: FormGroup;
  public user: User;

  constructor(private formBuilder: FormBuilder, public userService: UserService, private toast: ToastrService) {

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

  public register() {
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

  private checkPasswords(control: AbstractControl) {
    let respuesta = { matchPassword: true };


    if (control.parent?.value.password == control.value) { 

      // this.toast.error('La contraseña no coincide! ✒️');

      respuesta = null;

    };

    return respuesta;
  };

}