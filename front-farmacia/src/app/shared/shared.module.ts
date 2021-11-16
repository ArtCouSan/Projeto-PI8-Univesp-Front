import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ListboxModule } from 'primeng/listbox';
import { InputComponent } from './component/input/input.component';
import { SidemenuComponent } from './component/sidemenu/sidemenu.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TableComponent } from './component/table/table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {ToastModule} from 'primeng/toast';
import { ToastComponent } from './component/toast/toast.component';
import { FooterComponent } from './component/footer/footer.component';
import { InputMaskModule } from 'primeng/inputmask';
import { InputMaskComponent } from './component/input-mask/input-mask.component';

@NgModule({
  declarations: [
    NavbarComponent,
    InputMaskComponent,
    SidemenuComponent,
    TableComponent,
    ToastComponent,
    FooterComponent,
    InputComponent
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
    InputMaskModule
  ],
  exports: [
    NavbarComponent,
    InputMaskComponent,
    SidemenuComponent,
    TableComponent,
    ToastComponent,
    FooterComponent,
    InputComponent
  ]
})
export class SharedModule { }
