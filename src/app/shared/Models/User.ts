import {StaffProfil} from "./StaffProfil";

export class User {
  pseudo : string;
  email : string;
  nom_complet : string;
  contact_1 : string;
  password : string;
  confirm_password : string;
  client : boolean;
  staff : boolean;
  staffprofil : StaffProfil;
  token : string;
}
