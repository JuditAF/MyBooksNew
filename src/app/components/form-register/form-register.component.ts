import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

public registerForm: FormGroup;
public user: User;

constructor (private formBuilder: FormBuilder) {

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
    this.registerForm.reset();
  };

  private checkPasswords (control: AbstractControl){
    let res = {matchPassword : true};

    if(control.parent?.value.password == control.value)
      res = null;

     return res;
  };

//   reset() {
//     this.registerForm.reset();
// }

}
