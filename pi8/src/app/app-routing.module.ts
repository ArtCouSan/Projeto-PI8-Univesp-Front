import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'farmacia',
    loadChildren: () => import('./modules/famarcia/famarcia.module').then(m => m.FamarciaModule)
  },
  {
    path: 'medico',
    loadChildren: () => import('./modules/famarcia/famarcia.module').then(m => m.FamarciaModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./modules/famarcia/famarcia.module').then(m => m.FamarciaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
