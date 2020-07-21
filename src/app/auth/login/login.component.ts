import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  authError:String = null;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required])
    })
  }
  login() {
    this.authError = null;
    if(this.authService.login(this.loginForm.value)) {
      console.log("done");
      localStorage.setItem('token',JSON.stringify(this.loginForm.value));
      this.router.navigateByUrl("/user")
    } else {
      this.authError = "Invalid Email/Password !";
      console.log("failed");

    }
    
  }
}
