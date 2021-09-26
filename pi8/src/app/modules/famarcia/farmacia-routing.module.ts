import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmaciaContainerCadastrarComponent } from './farmacia-container-cadastrar/farmacia-container-cadastrar.component';
import { FarmaciaContainerConsultarComponent } from './farmacia-container-consultar/farmacia-container-consultar.component';

const routes: Routes = [
  { path: 'consultar', component: FarmaciaContainerConsultarComponent },
  { path: 'cadastrar', component: FarmaciaContainerCadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
