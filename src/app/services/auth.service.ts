import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users:Object[] = [
    {
      email:"mohaimin95@gmail.com",
      password:"222222"
    },
    {
      email:"fawazn203@gmail.com",
      password:"222222"
    },

  ]
  constructor() { }

  login(userObj:Object) {
    let user = this.users.find(obj=>obj['email'].trim().toLowerCase()===userObj['email']);
    if(user) {
      return user['password']===userObj['password'];
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem("token");
  }
}
