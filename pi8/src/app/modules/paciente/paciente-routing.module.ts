import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteContainerCadastrarComponent } from './paciente-container-cadastrar/paciente-container-cadastrar.component';
import { PacienteContainerConsultarComponent } from './paciente-container-consultar/paciente-container-consultar.component';

const routes: Routes = [
  { path: 'consultar', component: PacienteContainerConsultarComponent },
  { path: 'cadastrar', component: PacienteContainerCadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
