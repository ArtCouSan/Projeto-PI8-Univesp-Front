import { Component, OnInit } from '@angular/core';
import { PacienteDTO } from 'src/app/core/dto/paciente.dto';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import { environment } from 'src/environments/environment';

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
            nomeFarmacia: receita.farmaceutico?.farmacia?.nomeFilial ? receita.farmaceutico.farmacia.nomeFilial : '-',
            crfFarmaceutico: receita.farmaceutico?.crf ? receita.farmaceutico.crf : '-',
            nomeFarmaceutico: receita.farmaceutico?.nome ? receita.farmaceutico.nome : '-',
            nomeHospital: receita.medico?.hospital?.nomeFantasia ? receita.medico.hospital.nomeFantasia : '-',
            crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
            nomeMedico: receita.medico?.nome ? receita.medico.nome : '-',
            cpfPaciente: receita.paciente.cpf,
            hash: receita.hash,
            status: receita.status,
            dtInsercao: receita.dtInsercao,
            showQrcode: false,
            qrcode: `${environment.frontFarmaceutico}/${receita.hash}`
          })
        });
      }
    });
  }

  public items: Array<ReceitaListDTO> = Array<ReceitaListDTO>();

  public cols = [
    { field: 'dtInsercao', header: 'Data Insercão', isDate: true, isDoc: false },
    { field: 'nomeFarmacia', header: 'Farmacia', isDate: false, isDoc: false },
    { field: 'crfFarmaceutico', header: 'CRF do Farmaceutico', isDate: false, isDoc: false },
    { field: 'nomeFarmaceutico', header: 'Nome do Farmaceutico', isDate: false, isDoc: false },
    { field: 'nomeHospital', header: 'Hospital', isDate: false, isDoc: false },
    { field: 'crmMedico', header: 'CRM do Médico', isDate: false, isDoc: false },
    { field: 'nomeMedico', header: 'Nome do Médico', isDate: false, isDoc: false },
    { field: 'status', header: 'Status', isDate: false, isDoc: false }
  ];

}
