import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicoCadastrarFormComponent } from './medico-cadastrar-form/medico-cadastrar-form.component';
import { MedicoContainerCadastrarComponent } from './medico-container-cadastrar/medico-container-cadastrar.component';
import { MedicoContainerConsultarComponent } from './medico-container-consultar/medico-container-consultar.component';
import { MedicoRoutingModule } from './medico-routing.module';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MedicoCadastrarFormComponent,
    MedicoContainerCadastrarComponent,
    MedicoContainerConsultarComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class MedicoModule { }
