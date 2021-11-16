import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitaContainerConsultarComponent } from './receita-container-consultar/receita-container-consultar.component';

const routes: Routes = [
  { path: '', component: ReceitaContainerConsultarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
