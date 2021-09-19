import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from './navbar/navbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MenubarModule } from 'primeng/menubar';
import { ListboxModule } from 'primeng/listbox';



@NgModule({
  declarations: [
    SidemenuComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    MenubarModule,
    ListboxModule
  ],
  exports: [
    SidemenuComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
