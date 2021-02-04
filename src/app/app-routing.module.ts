import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: "/shared/login", pathMatch: 'full', },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module')
      .then(mod => mod.ClientModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module')
      .then(mod => mod.AdminModule)
  },
  {
    path: 'shared',
    loadChildren: () => import('./shared/shared.module')
      .then(mod => mod.SharedModule)
  },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
