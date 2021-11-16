import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { FarmaceuticoService } from 'src/app/core/service/farmaceutico.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-signin-cadastrar-form',
  templateUrl: './signin-cadastrar-form.component.html',
  styleUrls: ['./signin-cadastrar-form.component.scss']
})
export class SigninCadastrarFormComponent implements OnInit {

  constructor(
    private readonly authService: AuthenticationService,
    private readonly messageService: MessageService,
    private readonly tokenStorage: TokenStorageService,
    private readonly router: Router,
    private readonly farmaceuticoService: FarmaceuticoService ) { }

  signInForm = new FormGroup({
    crf: new FormControl(''),
    cnpjFarmacia: new FormControl(''),
    password: new FormControl('')
  });

  public behaviorSubjectCnpj$ = new BehaviorSubject<[{}]>([{name: 'Preencha o CRF', code: ''}]);

  ngOnInit(): void {
    this.signInForm.get("crf")?.valueChanges.subscribe(selectedValue => {
      this.farmaceuticoService.listarCNPJ(selectedValue).subscribe({
        next: resp => {
          if(resp.length > 0) {
            this.behaviorSubjectCnpj$.next(resp);
          } else {
            resp = [{name: 'Preencha o CRF', code: ''}]
            this.behaviorSubjectCnpj$.next(resp);
          }
        },
        error: error => {
          this.behaviorSubjectCnpj$.next([{name: 'Preencha o CRF', code: ''}]);
        }
      })
    });
  }

  onSubmit() {

    const crf = this.signInForm.get('crf')?.value;
    const password = this.signInForm.get('password')?.value;
    const cnpjFarmacia = this.signInForm.get('cnpjFarmacia')?.value.code;

    this.authService.login(crf, cnpjFarmacia, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveRefreshToken(data.access_token);

        this.authService.pegarUsuario(crf, cnpjFarmacia).subscribe(
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
