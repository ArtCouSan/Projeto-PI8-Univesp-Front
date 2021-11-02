import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmaceuticoContainerCadastrarComponent } from './farmaceutico-container-cadastrar/farmaceutico-container-cadastrar.component';
import { FarmaceuticoContainerConsultarComponent } from './farmaceutico-container-consultar/farmaceutico-container-consultar.component';

const routes: Routes = [
  { path: 'consultar', component: FarmaceuticoContainerConsultarComponent },
  { path: 'cadastrar', component: FarmaceuticoContainerCadastrarComponent },
  { path: 'consultar/editar/:id', component: FarmaceuticoContainerCadastrarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaceuticoRoutingModule { }
