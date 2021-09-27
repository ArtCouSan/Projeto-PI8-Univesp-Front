import { Component, OnInit } from '@angular/core';
import { ReceitaDTO } from 'src/app/core/receita.dto';

@Component({
  selector: 'app-receita-container-consultar',
  templateUrl: './receita-container-consultar.component.html',
  styleUrls: ['./receita-container-consultar.component.scss']
})
export class ReceitaContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cpfPaciente', header: 'CPF do Paciente' },
    { field: 'crmMedico', header: 'CRM do Médico' },
    { field: 'crfFarmaceutico', header: 'CRF Farmaceutico' },
    { field: 'dtInsercao', header: 'Data da Insercão' },
    { field: 'dtAlteracao', header: 'Data da Alteracão' },
    { field: 'dtExclusao', header: 'Data da Excluão' },
    { field: 'status', header: 'Status' }
  ];

  public items: Array<ReceitaDTO> = Array<ReceitaDTO>();

  constructor() { }

  ngOnInit(): void {
    this.items.push({
      status: "Ativo",
      cpfPaciente: "12345",
      crmMedico: "123456",
      crfFarmaceutico: "1234567",
      dtInsercao: new Date(),
      dtAlteracao: new Date(),
      dtExclusao: new Date()
    });

  }

}
