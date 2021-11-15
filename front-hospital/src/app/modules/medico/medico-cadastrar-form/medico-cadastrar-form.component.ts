import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { MedicoDTO } from 'src/app/core/dto/medico.dto';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-medico-cadastrar-form',
  templateUrl: './medico-cadastrar-form.component.html',
  styleUrls: ['./medico-cadastrar-form.component.scss']
})
export class MedicoCadastrarFormComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private messageService: MessageService) { }

  signUpForm = new FormGroup({
    crm: new FormControl('', {}),
    nome: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit(): void {
  }

  public onSubmit() {
    let adminDTO: MedicoDTO = {
      crm: this.signUpForm.get('crm')?.value,
      nome: this.signUpForm.get('nome')?.value,
      password: this.signUpForm.get('password')?.value
    }
    this.authService.registerMedico(adminDTO).subscribe(
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
