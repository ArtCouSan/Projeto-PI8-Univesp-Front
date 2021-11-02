import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmaciaContainerCadastrarComponent } from './farmacia-container-cadastrar/farmacia-container-cadastrar.component';
import { FarmaciaContainerConsultarComponent } from './farmacia-container-consultar/farmacia-container-consultar.component';
import { FarmaciaCadastrarFormComponent } from './farmacia-cadastrar-form/farmacia-cadastrar-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FarmaciaRoutingModule } from './farmacia-routing.module';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    FarmaciaContainerCadastrarComponent,
    FarmaciaContainerConsultarComponent,
    FarmaciaCadastrarFormComponent
  ],
  imports: [
    CommonModule,
    FarmaciaRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [TokenStorageService, MessageService]
})
export class FamarciaModule { }
