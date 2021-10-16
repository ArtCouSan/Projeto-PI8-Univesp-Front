import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { PacienteService } from 'src/app/core/service/paciente.service';

@Component({
  selector: 'app-paciente-cadastrar-form',
  templateUrl: './paciente-cadastrar-form.component.html',
  styleUrls: ['./paciente-cadastrar-form.component.scss']
})
export class PacienteCadastrarFormComponent implements OnInit {

  @Input() id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  pacienteForm = new FormGroup({
    nome: new FormControl(''),
    status: new FormControl(''),
    cpf: new FormControl('')
  });

  constructor(private readonly pacienteService: PacienteService) { }

  ngOnInit(): void {
    if(this.id.value) {
      this.pacienteService.findPaciente(this.id.value).subscribe({
        next: resp => {
          this.pacienteForm.controls["nome"].setValue(resp.nome);
          this.pacienteForm.controls["status"].setValue(resp.status);
          this.pacienteForm.controls["cpf"].setValue(resp.cpf);
        }
      });
    }
  }

}
