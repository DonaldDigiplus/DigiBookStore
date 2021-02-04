import { Component, OnInit } from '@angular/core';
import {User} from "../Models/User";
import {LoginServiceShared} from "../Services/LoginServiceShared";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user : User = new User();

  constructor(public loginService : LoginServiceShared, public router : Router) { }

  ngOnInit(): void {
  }

  register (u : User){
      if(u.password == u.confirm_password){
        this.loginService.registerUserProfil(u).subscribe(
          data=>{
            console.log(data);
          }, error => {
            console.log(error);
          },
          ()=>{
            this.router.navigateByUrl("/admin")
          }
        );
      }
  }

}
