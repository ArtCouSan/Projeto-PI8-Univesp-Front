import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmaceuticoCadastrarFormComponent } from './farmaceutico-cadastrar-form/farmaceutico-cadastrar-form.component';
import { FarmaceuticoContainerCadastrarComponent } from './farmaceutico-container-cadastrar/farmaceutico-container-cadastrar.component';
import { FarmaceuticoContainerConsultarComponent } from './farmaceutico-container-consultar/farmaceutico-container-consultar.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { FarmaceuticoRoutingModule } from './farmaceutico-routing.module';



@NgModule({
  declarations: [
    FarmaceuticoCadastrarFormComponent,
    FarmaceuticoContainerCadastrarComponent,
    FarmaceuticoContainerConsultarComponent
  ],
  imports: [
    CommonModule,
    FarmaceuticoRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class FarmaceuticoModule { }
