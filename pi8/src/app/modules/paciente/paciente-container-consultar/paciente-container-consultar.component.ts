import { Component, OnInit } from '@angular/core';
import { PacienteDTO } from 'src/app/core/paciente.dto';

@Component({
  selector: 'app-paciente-container-consultar',
  templateUrl: './paciente-container-consultar.component.html',
  styleUrls: ['./paciente-container-consultar.component.scss']
})
export class PacienteContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cpf', header: 'CPF' },
    { field: 'nome', header: 'Nome Completo' },
    { field: 'status', header: 'Status' }
  ];

  public items: Array<PacienteDTO> = Array<PacienteDTO>();

  constructor() { }

  ngOnInit(): void {
    this.items.push({
      nome: "Teste",
      status: "Ativo",
      cpf: "1234"
    });
    this.items.push({
      nome: "Teste 2",
      status: "Ativo",
      cpf: "1234"
    });
    this.items.push({
      nome: "Teste 3",
      status: "Ativo",
      cpf: "1234"
    });
    this.items.push({
      nome: "Teste 4",
      status: "Ativo",
      cpf: "1234"
    });
  }

}
