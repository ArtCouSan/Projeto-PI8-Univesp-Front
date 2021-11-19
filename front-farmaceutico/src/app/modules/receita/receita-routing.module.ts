import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaContainerConsultarFarmaceuticoComponent } from './receita-container-consultar-farmaceutico/receita-container-consultar-farmaceutico.component';
import { ReceitaContainerConsultarComponent } from './receita-container-consultar/receita-container-consultar.component';

const routes: Routes = [
  { path: '', component: ReceitaContainerConsultarComponent },
  { path: 'minhas', component: ReceitaContainerConsultarFarmaceuticoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
