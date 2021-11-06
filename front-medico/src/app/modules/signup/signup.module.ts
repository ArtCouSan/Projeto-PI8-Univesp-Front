import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { SignupCadastrarFormComponent } from './signup-cadastrar-form/signup-cadastrar-form.component';
import { SignupContainerComponent } from './signup-container/signup-container.component';
import { SignUpRoutingModule } from './signup-routing.module';



@NgModule({
  declarations: [
    SignupContainerComponent,
    SignupCadastrarFormComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [MessageService]
})
export class SignupModule { }
