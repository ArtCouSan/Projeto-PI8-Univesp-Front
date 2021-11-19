import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FarmaceuticoDTO } from 'src/app/core/dto/farmaceutico.dto';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-receita-container-consultar-farmaceutico',
  templateUrl: './receita-container-consultar-farmaceutico.component.html',
  styleUrls: ['./receita-container-consultar-farmaceutico.component.scss']
})
export class ReceitaContainerConsultarFarmaceuticoComponent implements OnInit {

  constructor(private readonly receitaService: ReceitaService,
    private tokenStorage: TokenStorageService) { }

  searchForm = new FormGroup({
    busca: new FormControl('')
  });

  ngOnInit(): void {
    let farmaceutico: FarmaceuticoDTO = this.tokenStorage.getUser();

    this.searchForm.get("busca")?.valueChanges.subscribe(cpfFiltrado => {
      this.receitaService.listarMinhasReceitas(farmaceutico.crf, farmaceutico.cnpjFarmacia, cpfFiltrado).subscribe({
        next: resp => {
          this.items = [];
          resp.forEach(receita => {
            this.items.push({
              crfFarmaceutico: receita.farmaceutico?.crf ? receita.farmaceutico.crf : '-',
              crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
              cpfPaciente: receita.paciente.cpf,
              hash: receita.hash,
              status: receita.status,
              dtInsercao: receita.dtInsercao,
              cnpjFarmaceutico: receita.farmaceutico?.cnpjFarmacia ? receita.farmaceutico?.cnpjFarmacia : '-'
            })
          });
        }
      });
    });
    this.receitaService.listarMinhasReceitas(farmaceutico.crf, farmaceutico.cnpjFarmacia, "").subscribe({
      next: resp => {
        resp.forEach(receita => {
          this.items.push({
            crfFarmaceutico: receita.farmaceutico?.crf ? receita.farmaceutico.crf : '-',
            crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
            cpfPaciente: receita.paciente.cpf,
            hash: receita.hash,
            status: receita.status,
            dtInsercao: receita.dtInsercao,
            cnpjFarmaceutico: receita.farmaceutico?.cnpjFarmacia ? receita.farmaceutico?.cnpjFarmacia : '-'
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
    { field: 'cpfPaciente', header: 'CPF do Paciente', isDate: false, isDoc: true },
    { field: 'status', header: 'Status', isDate: false, isDoc: false }
  ];

}
