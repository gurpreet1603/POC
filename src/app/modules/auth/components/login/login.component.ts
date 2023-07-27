import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showPassword: boolean = false;
  loadingNext: boolean = false;
  data:any =  localStorage.getItem('userlist')

  public loginForm:FormGroup;
  submitted:boolean=false;
  userdata: Object = {};
  userlist: any;
  message: any;
  constructor(private router :Router,){
    this.userlist = JSON.parse(this.data)

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  OnSubmit() {
    this.message= ''
    this.submitted =true
    if (this.loginForm.valid) {
      this.loadingNext = true;
      if(this.userlist?.length){

        this.userlist.map((el:any)=>{
          if(el.username == this.loginForm.value.username && el.password == this.loginForm.value.password){
            this.message =false;
            localStorage.setItem('userDetails','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')
            this.router.navigate(['/dashboard']);

          }else{
            this.message = 'Invalid Username or Password'
          }
        })
      }else{
        this.message = 'User Does not Exist!'


      }




  }
}

}
