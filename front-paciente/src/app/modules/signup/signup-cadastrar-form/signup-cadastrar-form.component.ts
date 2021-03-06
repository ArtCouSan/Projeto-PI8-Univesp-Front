import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PacienteDTO } from 'src/app/core/dto/paciente.dto';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-signup-cadastrar-form',
  templateUrl: './signup-cadastrar-form.component.html',
  styleUrls: ['./signup-cadastrar-form.component.scss']
})
export class SignupCadastrarFormComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private messageService: MessageService) { }

  signUpForm = new FormGroup({
    cpf: new FormControl('', {}),
    nome: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }

  public onSubmit() {
    let adminDTO: PacienteDTO = {
      cpf: this.signUpForm.get('cpf')?.value,
      nome: this.signUpForm.get('nome')?.value,
      password: this.signUpForm.get('password')?.value
    }
    this.authService.register(adminDTO).subscribe(
      data => {
        this.signUpForm.reset();
        this.messageService.clear();
        this.messageService.add({severity:'success', summary:'Cadastro realizado com sucesso', detail:'Seja bem-vindo :)'});
      },
      err => {
        this.messageService.clear();
        this.messageService.add({severity:'error', summary:'Cadastro não realizado', detail: err.error.message});
      }
    );
  }
}
