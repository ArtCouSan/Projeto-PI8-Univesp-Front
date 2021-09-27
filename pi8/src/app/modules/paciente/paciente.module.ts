import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { PacienteCadastrarFormComponent } from './paciente-cadastrar-form/paciente-cadastrar-form.component';
import { PacienteContainerCadastrarComponent } from './paciente-container-cadastrar/paciente-container-cadastrar.component';
import { PacienteContainerConsultarComponent } from './paciente-container-consultar/paciente-container-consultar.component';
import { PacienteRoutingModule } from './paciente-routing.module';



@NgModule({
  declarations: [
    PacienteContainerConsultarComponent,
    PacienteContainerCadastrarComponent,
    PacienteCadastrarFormComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class PacienteModule { }
