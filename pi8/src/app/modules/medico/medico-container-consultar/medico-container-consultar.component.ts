import { Component, OnInit } from '@angular/core';
import { MedicoDTO } from 'src/app/core/medico.dto';

@Component({
  selector: 'app-medico-container-consultar',
  templateUrl: './medico-container-consultar.component.html',
  styleUrls: ['./medico-container-consultar.component.scss']
})
export class MedicoContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'crm', header: 'CRM' },
    { field: 'cpf', header: 'CPF' },
    { field: 'nome', header: 'Nome Completo' },
    { field: 'status', header: 'Status' }
  ];

  public items: Array<MedicoDTO> = Array<MedicoDTO>();

  constructor() { }

  ngOnInit(): void {
    this.items.push({
      crm: "1234",
      nome: "Teste",
      status: "Ativo",
      cpf: "1234"
    });
    this.items.push({
      crm: "12345",
      nome: "Teste 2",
      status: "Ativo",
      cpf: "1234"
    });
    this.items.push({
      crm: "123456",
      nome: "Teste 3",
      status: "Ativo",
      cpf: "1234"
    });
    this.items.push({
      crm: "1234567",
      nome: "Teste 4",
      status: "Ativo",
      cpf: "1234"
    });
  }

}
