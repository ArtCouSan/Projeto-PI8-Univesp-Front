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
    loadChildren: () => import('./modules/medico/medico.module').then(m => m.MedicoModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./modules/paciente/paciente.module').then(m => m.PacienteModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./modules/receita/receita.module').then(m => m.ReceitaModule)
  },
  {
    path: 'farmaceutico',
    loadChildren: () => import('./modules/farmaceutico/farmaceutico.module').then(m => m.FarmaceuticoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
