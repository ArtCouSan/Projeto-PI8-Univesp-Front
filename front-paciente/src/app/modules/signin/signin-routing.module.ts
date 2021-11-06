import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginContainerComponent } from './sigin-container/sigin-container.component';

const routes: Routes = [
  { path: '', component: SiginContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInRoutingModule { }
