import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaContainerCadastrarComponent } from './receita-container-cadastrar/receita-container-cadastrar.component';
import { ReceitaContainerConsultarComponent } from './receita-container-consultar/receita-container-consultar.component';

const routes: Routes = [
  { path: 'consultar', component: ReceitaContainerConsultarComponent },
  { path: 'cadastrar', component: ReceitaContainerCadastrarComponent },
  { path: 'consultar/editar/:id', component: ReceitaContainerCadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
