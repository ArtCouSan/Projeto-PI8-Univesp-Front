import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { MedicoCadastrarFormComponent } from './medico-cadastrar-form/medico-cadastrar-form.component';
import { MedicoContainerComponent } from './medico-container/medico-container.component';
import { MedicoRoutingModule } from './medico-routing.module';


@NgModule({
  declarations: [
    MedicoContainerComponent,
    MedicoCadastrarFormComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [MessageService]
})
export class MedicoModule { }
