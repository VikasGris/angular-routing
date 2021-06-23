import { Routes } from '@angular/router';
import { HelloComponent, HiComponent, TestComponent } from './hello.component';

export const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    children: [{ path: 'hellochild', component: HiComponent }]
  },
  { path: 'hi', component: HiComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: '**', redirectTo: 'test' }
];
