import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-receita-container-cadastrar',
  templateUrl: './receita-container-cadastrar.component.html',
  styleUrls: ['./receita-container-cadastrar.component.scss']
})
export class ReceitaContainerCadastrarComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private tokenStorage: TokenStorageService,
    private router: Router) { }

  receitaForm = new FormGroup({
    cpfPaciente: new FormControl(''),
    file: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const cpfPaciente = this.receitaForm.get('cpfPaciente')?.value;
    const file = this.receitaForm.get('file')?.value;
  }

  onUpload($event: any) {
    this.receitaForm.controls['file'].setValue($event.currentFiles);
  }
}
