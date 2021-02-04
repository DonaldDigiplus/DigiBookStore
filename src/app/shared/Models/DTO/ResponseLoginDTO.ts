import {User} from "../User";

export class ResponseLoginDTO {
  user : User = new User();
  expires_datetime_token : string;
}
