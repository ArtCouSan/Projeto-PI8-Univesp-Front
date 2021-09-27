import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-paciente-cadastrar-form',
  templateUrl: './paciente-cadastrar-form.component.html',
  styleUrls: ['./paciente-cadastrar-form.component.scss']
})
export class PacienteCadastrarFormComponent implements OnInit {

  pacienteForm = new FormGroup({
    nome: new FormControl(''),
    status: new FormControl(''),
    cpf: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
