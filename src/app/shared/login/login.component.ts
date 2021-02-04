import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../Models/User";
import {LoginDTO} from "../Models/DTO/LoginDTO";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user : LoginDTO = new LoginDTO();

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  route(url : string){
    this.router.navigateByUrl(url)
  }

  login (user : LoginDTO){

  }

}
