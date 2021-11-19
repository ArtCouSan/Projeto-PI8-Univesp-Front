import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { FooterComponent } from './component/footer/footer.component';
import { InputMaskComponent } from './component/input-mask/input-mask.component';
import { InputComponent } from './component/input/input.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { TableComponent } from './component/table/table.component';
import { ToastComponent } from './component/toast/toast.component';
import { CpfCnpjPipe } from './pipe/cpfcnpj.pipe';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    NavbarComponent,
    InputComponent,
    SidemenuComponent,
    TableComponent,
    ToastComponent,
    FooterComponent,
    InputMaskComponent,
    CpfCnpjPipe
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MenubarModule,
    ListboxModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    InputMaskModule,
    DialogModule,
    QRCodeModule
  ],
  exports: [
    NavbarComponent,
    InputComponent,
    SidemenuComponent,
    TableComponent,
    ToastComponent,
    FooterComponent,
    InputMaskComponent
  ]
})
export class SharedModule { }
