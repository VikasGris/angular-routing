import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CustomePreloader } from './customPreloader.service';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UserModule),
    data: { preload: false }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: CustomePreloader })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
