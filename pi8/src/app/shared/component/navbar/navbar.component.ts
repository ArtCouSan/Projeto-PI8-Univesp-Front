import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: Array<MenuItem> = Array<MenuItem>();
  display: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'MENU',
        command: e => this.abrirMenu()
      },
      {
        label: 'PERFIL',
      }
    ];

  }

  public displayChange = ($event: any) => {
    this.display.next($event);
  }

  public abrirMenu = (): void => {
    this.display.next(true);
  }

}
