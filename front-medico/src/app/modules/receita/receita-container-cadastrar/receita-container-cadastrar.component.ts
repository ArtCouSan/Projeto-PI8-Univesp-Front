import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MedicoDTO } from 'src/app/core/dto/medico.dto';
import { ReceitaSaveDTO } from 'src/app/core/dto/receita-save.dto.';
import { ReceitaService } from 'src/app/core/service/receita.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-receita-container-cadastrar',
  templateUrl: './receita-container-cadastrar.component.html',
  styleUrls: ['./receita-container-cadastrar.component.scss']
})
export class ReceitaContainerCadastrarComponent implements OnInit {
  
  @ViewChild('fileUpload') fileUpload: any;

  constructor(
    private messageService: MessageService,
    private tokenStorage: TokenStorageService,
    private receitaService: ReceitaService,
    private formBuilder: FormBuilder) { }

  receitaForm = this.formBuilder.group({
    cpfPaciente: [null, Validators.required],
    file: [null, Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit(formValid: boolean) {
    if(formValid) {
      const cpfPaciente = this.receitaForm.get('cpfPaciente')?.value;
      const file = this.receitaForm.get('file')?.value;
      const crmMedico: MedicoDTO = this.tokenStorage.getUser();
      let receita: ReceitaSaveDTO = {
        cpfPaciente: cpfPaciente,
        crmMedico: crmMedico.crm,
        file: file
      }
      this.receitaService.salvarReceita(receita).subscribe({
        next: resp => {
          this.receitaForm.reset();
          this.fileUpload.clear();
          this.messageService.clear();
          this.messageService.add({severity:'success', summary:'Receita salva com sucesso', detail:''});
        }, error: error => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Erro ao salvar a receita', detail: error.error.message });
        }
      });
    }
  }

  onUpload($event: any) {
    this.receitaForm.controls['file'].setValue($event.currentFiles);
  }
}
