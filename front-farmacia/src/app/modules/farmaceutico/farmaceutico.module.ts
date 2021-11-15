import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { FarmaceuticoCadastrarFormComponent } from './farmaceutico-cadastrar-form/farmaceutico-cadastrar-form.component';
import { FarmaceuticoContainerComponent } from './farmaceutico-container/farmaceutico-container.component';
import { FarmaceuticoRoutingModule } from './farmaceutico-routing.module';

@NgModule({
  declarations: [
    FarmaceuticoContainerComponent,
    FarmaceuticoCadastrarFormComponent
  ],
  imports: [
    CommonModule,
    FarmaceuticoRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [MessageService]
})
export class FarmaceuticoModule { }
