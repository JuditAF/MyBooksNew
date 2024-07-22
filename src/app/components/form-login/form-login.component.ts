import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

 public loginForm: FormGroup;
 public user: User;

 constructor (private formBuilder: FormBuilder, public userService: UserService, private toast:ToastrService) {
  this.buildForm();
  }

  buildForm () {

    const minPassLength = 8;

    this.loginForm = this.formBuilder.group({
      email: [, [Validators.required, Validators.email]],
      password : [, [Validators.required, Validators.minLength(minPassLength)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public acceder () {
    const user = new User (" ", " ", this.loginForm.value.email, " ", this.loginForm.value.password);
    console.log(user);

    this.userService.login(user).subscribe((respuesta: Respuesta) => {
      if (respuesta.data = []) {
        
        this.toast.info('¡El usuario no existe! 🤪')
        console.log(respuesta);
        
      } else {

        this.userService.logueado =  true;

        this.userService.user = respuesta.user[0];

        this.toast.success('¡Usuario logueado correctamente!, ¡Bienvenido! 🤗');
        console.log(respuesta);
    
      }
    });

    this.loginForm.reset();
    
  }
}
