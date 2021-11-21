import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FarmaceuticoDTO } from 'src/app/core/dto/farmaceutico.dto';
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

  searchForm = new FormGroup({
    busca: new FormControl('')
  });

  ngOnInit(): void {
    let farmaceutico: FarmaceuticoDTO = this.tokenStorage.getUser();

    this.searchForm.get("busca")?.valueChanges.subscribe(cpfFiltrado => {
      this.receitaService.listarReceitas(cpfFiltrado).subscribe({
        next: resp => {
          this.items = [];
          resp.forEach(receita => {
            this.items.push({
              crfFarmaceutico: farmaceutico.crf,
              crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
              cpfPaciente: receita.paciente.cpf,
              nomePaciente: receita.paciente.nome,
              hash: receita.hash,
              status: receita.status,
              dtInsercao: receita.dtInsercao,
              cnpjFarmaceutico: farmaceutico.cnpjFarmacia,
              nomeHospital: receita.medico?.hospital.nomeFantasia ? receita.medico.hospital.nomeFantasia : '-'
            })
          });
        }
      });
    });
    this.receitaService.listarReceitas("").subscribe({
      next: resp => {
        resp.forEach(receita => {
          this.items.push({
            crfFarmaceutico: farmaceutico.crf,
            crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
            cpfPaciente: receita.paciente.cpf,
            nomePaciente: receita.paciente.nome,
            hash: receita.hash,
            status: receita.status,
            dtInsercao: receita.dtInsercao,
            cnpjFarmaceutico: farmaceutico.cnpjFarmacia,
            nomeHospital: receita.medico?.hospital.nomeFantasia ? receita.medico.hospital.nomeFantasia : '-'
          })
        });
      }
    });
  }

  public items: Array<ReceitaListDTO> = Array<ReceitaListDTO>();

  public cols = [
    { field: 'dtInsercao', header: 'Data Insercão', isDate: true, isDoc: false },
    { field: 'nomeHospital', header: 'Hospital', isDate: false, isDoc: false },
    { field: 'crmMedico', header: 'CRM do Médico', isDate: false, isDoc: false },
    { field: 'nomePaciente', header: 'Nome do Paciente', isDate: false, isDoc: false },
    { field: 'cpfPaciente', header: 'CPF do Paciente', isDate: false, isDoc: true },
    { field: 'status', header: 'Status', isDate: false, isDoc: false }
  ];

}
