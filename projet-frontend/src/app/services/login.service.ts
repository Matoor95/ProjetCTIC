import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  isLoggedIn=false;
  redirectUrl: string;


  constructor(private router:Router) { }


  seConnecter(login,password){
   
    if(login ==='amy' && password === 'admin')
      return this.isLoggedIn=true;
    else
      return this.isLoggedIn=false;
  }
 
}
