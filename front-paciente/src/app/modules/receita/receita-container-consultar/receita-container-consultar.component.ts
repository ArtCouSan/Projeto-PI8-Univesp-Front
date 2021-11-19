import { Component, OnInit } from '@angular/core';
import { PacienteDTO } from 'src/app/core/dto/paciente.dto';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-receita-container-consultar',
  templateUrl: './receita-container-consultar.component.html',
  styleUrls: ['./receita-container-consultar.component.scss']
})
export class ReceitaContainerConsultarComponent implements OnInit {

  constructor(private readonly receitaService: ReceitaService,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    let paciente: PacienteDTO = this.tokenStorage.getUser();
    this.receitaService.listarReceitas(paciente.cpf).subscribe({
      next: resp => {
        resp.forEach(receita => {
          this.items.push({
            crfFarmaceutico: receita.farmaceutico?.crf ? receita.farmaceutico.crf : '-',
            crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
            cpfPaciente: receita.paciente.cpf,
            hash: receita.hash,
            status: receita.status,
            dtInsercao: receita.dtInsercao,
            showQrcode: false
          })
        });
      }
    });
  }

  public items: Array<ReceitaListDTO> = Array<ReceitaListDTO>();

  public cols = [
    { field: 'dtInsercao', header: 'Data Insercão', isDate: true, isDoc: false },
    { field: 'crfFarmaceutico', header: 'CRF do Farmaceutico', isDate: false, isDoc: false },
    { field: 'crmMedico', header: 'CRM do Médico', isDate: false, isDoc: false },
    { field: 'cpfPaciente', header: 'CPF do Paciente', isDate: false, isDoc: true},
    { field: 'status', header: 'Status', isDate: false, isDoc: false }
  ];

}
