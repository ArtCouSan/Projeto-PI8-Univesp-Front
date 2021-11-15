import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoContainerComponent } from './medico-container/medico-container.component';

const routes: Routes = [
  { path: 'cadastrar', component: MedicoContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
