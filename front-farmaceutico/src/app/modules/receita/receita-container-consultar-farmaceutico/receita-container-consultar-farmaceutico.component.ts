import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
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
    private readonly tokenStorage: TokenStorageService,
    private readonly route: ActivatedRoute,
    private readonly messageService: MessageService,
    private readonly router: Router) { }

  searchForm = new FormGroup({
    busca: new FormControl('')
  });

  ngOnInit() {
    let farmaceutico: FarmaceuticoDTO = this.tokenStorage.getUser();
    const hash = this.route.snapshot.paramMap.get('hash');

    if (hash) {
      this.receitaService.analisarReceitaPacienteComoFarmaceuticorReceitasFarmaceutico(hash, farmaceutico.crf, farmaceutico.cnpjFarmacia).subscribe({
        next: resp => {
          this.messageService.clear();
          this.messageService.add({ severity: 'success', summary: 'Receita está sua lista em analise!', detail: '' });
        }, error: error => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Erro ao analisar a receita', detail: error.error.message });
        }, complete: () => {
          this.router.navigate(['../receita/minhas']); 
        }
      });
    } else {
      this.searchForm.get("busca")?.valueChanges.subscribe(cpfFiltrado => {
        this.filtrarItems(farmaceutico.crf, farmaceutico.cnpjFarmacia, cpfFiltrado);
      });
      this.filtrarItems(farmaceutico.crf, farmaceutico.cnpjFarmacia, "");
    }
  }

  public filtrarItems(crf: string, cnpj: string, filtro: string) {
    this.receitaService.listarMinhasReceitas(crf, cnpj, filtro).subscribe({
      next: resp => {
        this.items = [];
        resp.forEach(receita => {
          this.items.push({
            crfFarmaceutico: receita.farmaceutico?.crf ? receita.farmaceutico.crf : '-',
            crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
            nomeHospital: receita.medico?.hospital.nomeFantasia ? receita.medico.hospital.nomeFantasia : '-',
            cpfPaciente: receita.paciente.cpf,
            hash: receita.hash,
            status: receita.status,
            dtInsercao: receita.dtInsercao,
            cnpjFarmaceutico: receita.farmaceutico?.cnpjFarmacia ? receita.farmaceutico?.cnpjFarmacia : '-',
            nomePaciente: receita.paciente.nome,
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
