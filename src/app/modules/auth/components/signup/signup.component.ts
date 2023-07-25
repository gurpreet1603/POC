import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  showPassword: boolean = false;
  loadingNext: boolean = false;

  public SignupForm:FormGroup;
  submitted:boolean=false;
  userdata: Object = {};
  userlist: any=[];

  constructor(private router :Router,){
    let x :any=  localStorage.getItem('userlist');
    this.userlist = JSON.parse(x)


    this.SignupForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    });
  }

  OnSubmit() {
    this.submitted =true
    if (this.SignupForm.valid) {
      this.loadingNext = true;
      let Obj = {
        firstname : this.SignupForm.value.firstname,
        lastname : this.SignupForm.value.lastname,
        username : this.SignupForm.value.username,
        password : this.SignupForm.value.password,
      }
      this.userlist.push(Obj)

      localStorage.setItem('userlist',JSON.stringify(this.userlist));
      this.SignupForm.reset()
      this.router.navigate(['/'])
    }

  }



}
