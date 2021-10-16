import { Component, OnInit } from '@angular/core';
import { ReceitaDTO } from 'src/app/core/dto/receita.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';

@Component({
  selector: 'app-receita-container-consultar',
  templateUrl: './receita-container-consultar.component.html',
  styleUrls: ['./receita-container-consultar.component.scss']
})
export class ReceitaContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cpfPaciente', header: 'CPF do Paciente', isDate: false },
    { field: 'crmMedico', header: 'CRM do Médico', isDate: false },
    { field: 'crfFarmaceutico', header: 'CRF Farmaceutico', isDate: false },
    { field: 'dtInsercao', header: 'Data da Insercão', isDate: true },
    { field: 'dtAlteracao', header: 'Data da Alteracão', isDate: true },
    { field: 'dtExclusao', header: 'Data da Exclusão', isDate: true },
    { field: 'status', header: 'Status', isDate: false }
  ];

  public items: Array<ReceitaDTO> = Array<ReceitaDTO>();

  constructor(private readonly receitaService: ReceitaService) { }

  ngOnInit(): void {
    this.receitaService.listReceitas().subscribe({
      next: resp => {
        this.items = resp;
      }
    });
  }

}
