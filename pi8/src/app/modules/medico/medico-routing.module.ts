import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoContainerCadastrarComponent } from './medico-container-cadastrar/medico-container-cadastrar.component';
import { MedicoContainerConsultarComponent } from './medico-container-consultar/medico-container-consultar.component';

const routes: Routes = [
  { path: 'consultar', component: MedicoContainerConsultarComponent },
  { path: 'cadastrar', component: MedicoContainerCadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
