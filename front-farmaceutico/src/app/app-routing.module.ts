import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './core/guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./modules/receita/receita.module').then(m => m.ReceitaModule),
    canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
