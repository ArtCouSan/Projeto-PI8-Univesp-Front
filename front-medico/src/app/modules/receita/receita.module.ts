import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitaContainerCadastrarComponent } from './receita-container-cadastrar/receita-container-cadastrar.component';
import { ReceitaContainerConsultarComponent } from './receita-container-consultar/receita-container-consultar.component';
import { ReceitaRoutingModule } from './receita-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ReceitaService } from 'src/app/core/service/receita.service';

@NgModule({
  declarations: [
    ReceitaContainerCadastrarComponent,
    ReceitaContainerConsultarComponent
  ],
  imports: [
    CommonModule,
    ReceitaRoutingModule,
    ButtonModule,
    FileUploadModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [TokenStorageService, MessageService, ReceitaService]
})
export class ReceitaModule { }
