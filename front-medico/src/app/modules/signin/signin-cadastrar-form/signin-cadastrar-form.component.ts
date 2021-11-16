import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import {Router} from "@angular/router"
import { BehaviorSubject } from 'rxjs';
import { MedicoService } from 'src/app/core/service/medico.service';

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
    private readonly medicoService: MedicoService) { }

  signInForm = new FormGroup({
    crm: new FormControl(''),
    cnpjHospital: new FormControl(''),
    password: new FormControl('')
  });

  public behaviorSubjectCnpj$ = new BehaviorSubject<[{}]>([{name: 'Preencha o CRM', code: ''}]);

  ngOnInit(): void {
    this.signInForm.get("crm")?.valueChanges.subscribe(selectedValue => {
      this.medicoService.listarCNPJ(selectedValue).subscribe({
        next: resp => {
          if(resp.length > 0) {
            this.behaviorSubjectCnpj$.next(resp);
          } else {
            resp = [{name: 'Preencha o CRM', code: ''}]
            this.behaviorSubjectCnpj$.next(resp);
          }
        },
        error: error => {
          this.behaviorSubjectCnpj$.next([{name: 'Preencha o CRM', code: ''}]);
        }
      })
    });
  }

  onSubmit() {

    const crm = this.signInForm.get('crm')?.value;
    const password = this.signInForm.get('password')?.value;
    const cnpjHospital = this.signInForm.get('cnpjHospital')?.value.code;

    this.authService.login(crm, cnpjHospital, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveRefreshToken(data.access_token);

        this.authService.pegarUsuario(crm, cnpjHospital).subscribe(
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
