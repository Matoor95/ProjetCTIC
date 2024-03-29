import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { FormBuilder } from '@angular/forms';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titre:string = "Veillez vous Connecter";
  color:string = '';
  succes:boolean;
  error:boolean;
  normal:boolean;
  message;
  checkoutForm;
  
  constructor(private loginService:LoginService,private formBuilder: FormBuilder,private router:Router) {
     
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: ''
    });
   }

  ngOnInit() {
  }

 changerTitle(customerdata){
   this.titre=customerdata.titre;
   
  }
  seConnecter(data){
    this.normal=true;
    this.message="Veuillez patienter....";
    this.succes=false;
    this.error=false;
   
    setTimeout(() =>{
    if(this.loginService.seConnecter(data.login,data.password)){
       this.normal=false
       this.succes=true;
      
       let redirect = this.loginService.redirectUrl ? this.router.parseUrl(this.loginService.redirectUrl) : '/accueil-admin';
      setTimeout(() => this.router.navigateByUrl(redirect),2000);
    }else{
      this.normal=false;
      this.error=true;
      this.message="Désolé! Authentification échouée";
     
     
    } 
  },2000);
    
  }
}
