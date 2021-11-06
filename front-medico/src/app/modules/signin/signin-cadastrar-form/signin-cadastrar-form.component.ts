import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-signin-cadastrar-form',
  templateUrl: './signin-cadastrar-form.component.html',
  styleUrls: ['./signin-cadastrar-form.component.scss']
})
export class SigninCadastrarFormComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private messageService: MessageService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  signInForm = new FormGroup({
    crm: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {

    const username = this.signInForm.get('crm')?.value;
    const password = this.signInForm.get('password')?.value;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveRefreshToken(data.access_token);

        this.authService.pegarUsuario(username).subscribe(
          user => {
            this.tokenStorage.saveUser(user);
            this.router.navigate(['/']);
          },
          errUser => {
            this.messageService.clear();
            this.messageService.add({ severity: 'error', summary: 'Usuario não encontrado', detail: errUser.error.message });
          });
      },
      err => {
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Login não realizado', detail: err.error.message });
      }
    );
  }

}
