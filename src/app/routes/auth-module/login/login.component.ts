import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // loginForm : FormGroup ;
  name = 'Angular';

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: [''],
    password: ['']
  })

  loginAdminForm = this.fb.group({
    email: [''],
    password: ['']
  })

  public userFormSubmit(data) {
    console.log(data);
    this.name = "ad"
  }

  public userAdminFormSubmit(data){
     console.log(data);
  }
}
