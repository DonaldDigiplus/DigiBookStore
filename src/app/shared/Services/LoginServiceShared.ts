import {Injectable} from "@angular/core";
import {User} from "../Models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {AdressIP} from "./AdressIP"

@Injectable()
export class LoginServiceShared {

  constructor(private https: HttpClient, private route: Router){}

  registerUserProfil(u: User) {
    console.log(u);
    return this.https.post<User>(AdressIP.apiUrl + 'accounts/register/',u);
  }
}
