import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app.routing.module';
import { UsersComponent } from './users/users.component';
import { AddEditUserComponent } from './users/addEditUsers/addEditUser.component';
import { AppService } from './app.service';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, UsersComponent, AddEditUserComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule {}
