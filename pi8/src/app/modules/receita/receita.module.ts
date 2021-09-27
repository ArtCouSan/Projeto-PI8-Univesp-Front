import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReceitaCadastrarFormComponent } from './receita-cadastrar-form/receita-cadastrar-form.component';
import { ReceitaContainerCadastrarComponent } from './receita-container-cadastrar/receita-container-cadastrar.component';
import { ReceitaContainerConsultarComponent } from './receita-container-consultar/receita-container-consultar.component';
import { ReceitaRoutingModule } from './receita-routing.module';



@NgModule({
  declarations: [
    ReceitaCadastrarFormComponent,
    ReceitaContainerCadastrarComponent,
    ReceitaContainerConsultarComponent
  ],
  imports: [
    CommonModule, 
    ReceitaRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ReceitaModule { }
