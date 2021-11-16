import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FarmaciaDTO } from 'src/app/core/dto/farmacia.dto';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-signup-cadastrar-form',
  templateUrl: './signup-cadastrar-form.component.html',
  styleUrls: ['./signup-cadastrar-form.component.scss']
})
export class SignupCadastrarFormComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private messageService: MessageService,
    private formBuilder: FormBuilder) { }

  signUpForm = this.formBuilder.group({
    cnpj: [null, Validators.required],
    nome: [null, Validators.required],
    password: [null, Validators.required],
  });

  ngOnInit(): void {
  }

  public onSubmit(formValid: boolean) {
    if (formValid) {
      let adminDTO: FarmaciaDTO = {
        cnpj: this.signUpForm.get('cnpj')?.value,
        nomeFilial: this.signUpForm.get('nome')?.value,
        password: this.signUpForm.get('password')?.value
      }
      this.authService.register(adminDTO).subscribe(
        data => {
          this.signUpForm.reset();
          this.messageService.clear();
          this.messageService.add({ severity: 'success', summary: 'Cadastro realizado com sucesso', detail: 'Seja bem-vindo :)' });
        },
        err => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Cadastro não realizado', detail: err.error.message });
        }
      );
    }
  }
}
