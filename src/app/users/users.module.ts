import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AddEditUserComponent } from "./addEditUsers/addEditUser.component";
import { UsersRoutingModule } from "./user.routing.module";
import { UsersComponent } from "./users.component";

@NgModule({
  declarations:[UsersComponent, AddEditUserComponent, UsersRoutingModule],
  imports:[CommonModule , FormsModule],
  providers:[]
})

export class UserModule{

}