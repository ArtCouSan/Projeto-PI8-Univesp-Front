import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-receita-cadastrar-form',
  templateUrl: './receita-cadastrar-form.component.html',
  styleUrls: ['./receita-cadastrar-form.component.scss']
})
export class ReceitaCadastrarFormComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
