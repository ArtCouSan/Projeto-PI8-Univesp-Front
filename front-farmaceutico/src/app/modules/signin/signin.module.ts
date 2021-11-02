import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SiginContainerComponent } from './sigin-container/sigin-container.component';
import { SigninCadastrarFormComponent } from './signin-cadastrar-form/signin-cadastrar-form.component';
import { SignInRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [
    SiginContainerComponent,
    SigninCadastrarFormComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [TokenStorageService, MessageService]
})
export class SigninModule { }
