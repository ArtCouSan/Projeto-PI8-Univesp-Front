import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmaceuticoContainerComponent } from './farmaceutico-container/farmaceutico-container.component';

const routes: Routes = [
  { path: 'cadastrar', component: FarmaceuticoContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaceuticoRoutingModule { }
