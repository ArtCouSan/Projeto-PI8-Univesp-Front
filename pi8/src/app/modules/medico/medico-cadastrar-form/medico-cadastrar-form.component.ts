import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MedicoService } from 'src/app/core/service/medico.service';

@Component({
  selector: 'app-medico-cadastrar-form',
  templateUrl: './medico-cadastrar-form.component.html',
  styleUrls: ['./medico-cadastrar-form.component.scss']
})
export class MedicoCadastrarFormComponent implements OnInit {

  @Input() id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  medicoForm = new FormGroup({
    nome: new FormControl(''),
    status: new FormControl(''),
    crm: new FormControl(''),
    cpf: new FormControl('')
  });

  constructor(private readonly medicoService: MedicoService) { }

  ngOnInit(): void {
    if(this.id.value) {
      this.medicoService.findMedico(this.id.value).subscribe({
        next: resp => {
          this.medicoForm.controls["nome"].setValue(resp.nome);
          this.medicoForm.controls["status"].setValue(resp.status);
          this.medicoForm.controls["crm"].setValue(resp.crm);
          this.medicoForm.controls["cpf"].setValue(resp.cpf);
        }
      });
    }
  }

}
