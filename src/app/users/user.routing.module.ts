import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TestCanActivate,
  TestCanActivateChild,
  TestCanDeactivate,
  TestResolve
} from '../guards';
import { AddEditUserComponent } from './addEditUsers/addEditUser.component';
import { UsersComponent } from './users.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'test',
        component: AddEditUserComponent
      }
    ]
  },
  {
    path: 'add',
    component: AddEditUserComponent
  },
  {
    path: ':id',
    component: AddEditUserComponent,
    canDeactivate: [TestCanDeactivate],
    resolve: {
      resolvedData: TestResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
