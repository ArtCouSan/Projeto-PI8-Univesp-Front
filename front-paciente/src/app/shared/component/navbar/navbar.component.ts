import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items: Array<MenuItem> = Array<MenuItem>();
  display: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private tokenService: TokenStorageService,
    private router: Router) { }

  ngOnInit(): void {
    const user = this.tokenService.getUser();
    if (!user) {
      this.items = [
        {
          label: 'SIGN IN',
          routerLink: '/signin'
        },
        {
          label: 'SIGN UP',
          routerLink: '/signup'
        }
      ];
    } else {
      this.items = [
        {
          label: 'MENU',
          command: e => this.abrirMenu()
        },
        {
          label: 'LOGOUT',
          command: e => this.logout()
        }
      ];
    }
  }

  public displayChange = ($event: any) => {
    this.display.next($event);
  }

  public abrirMenu = (): void => {
    this.display.next(true);
  }

  public logout = (): void => {
    this.tokenService.signOut();
    window.location.reload();
  }

}