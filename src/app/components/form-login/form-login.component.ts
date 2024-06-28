import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

 public loginForm: FormGroup;
 public user: User;

 constructor (private formBuilder: FormBuilder) {
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

 public acceder (eMail: string, password: string) {
  const user = this.loginForm.value;
  console.log(user);
  this.loginForm.reset();
 };

//  reset() {
//   this.loginForm.reset();
// }

}
