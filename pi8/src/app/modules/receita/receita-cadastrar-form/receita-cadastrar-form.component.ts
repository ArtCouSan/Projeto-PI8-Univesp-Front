import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { ReceitaService } from 'src/app/core/service/receita.service';

@Component({
  selector: 'app-receita-cadastrar-form',
  templateUrl: './receita-cadastrar-form.component.html',
  styleUrls: ['./receita-cadastrar-form.component.scss']
})
export class ReceitaCadastrarFormComponent implements OnInit {

  @Input() id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  receitaForm = new FormGroup({
    cpfPaciente: new FormControl(''),
    crmMedico: new FormControl(''),
    crfFarmaceutico: new FormControl(''),
    dtInsercao: new FormControl(),
    dtAlteracao: new FormControl(),
    dtExclusao: new FormControl(),
    arquivo: new FormControl(''),
    status: new FormControl('')
  });

  constructor(private readonly receitaService: ReceitaService) { }

  ngOnInit(): void {
    if(this.id.value) {
      this.receitaService.findReceita(this.id.value).subscribe({
        next: resp => {
          this.receitaForm.controls["cpfPaciente"].setValue(resp.cpfPaciente);
          this.receitaForm.controls["crmMedico"].setValue(resp.crmMedico);
          this.receitaForm.controls["crfFarmaceutico"].setValue(resp.crfFarmaceutico);
          this.receitaForm.controls["dtInsercao"].setValue(resp.dtInsercao);
          this.receitaForm.controls["dtAlteracao"].setValue(resp.dtAlteracao);
          this.receitaForm.controls["dtExclusao"].setValue(resp.dtExclusao);
          this.receitaForm.controls["status"].setValue(resp.status);
        }
      });
    }
  }

}
