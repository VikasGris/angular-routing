import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, User } from '../../app.service';

@Component({
  selector: 'my-addedituser',
  templateUrl: './addEditUser.component.html',
  styleUrls: ['./addEditUser.component.css']
})
export class AddEditUserComponent {
  user: User = { id: 0, name: '', address: '' };

  constructor(
    private appservice: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      //console.log(id);
      this.user = this.appservice.getUser(id);
      //console.log(this.user);
    });
  }

  onCancel() {
    this.router.navigateByUrl('/users');
  }

  onDelete() {
    this.appservice.deleteUser(this.user.id);
    this.router.navigateByUrl('/users');
  }

  onSave() {
    if (this.user.id > 0) {
      this.appservice.updateUser(this.user);
    } else {
      this.appservice.addUser(this.user);
    }
    this.router.navigateByUrl('/users');
  }

  canDeactivate() {
    return new Promise((resolve, reject) => {
      resolve(confirm('Want to exit'));
    });
  }
}
