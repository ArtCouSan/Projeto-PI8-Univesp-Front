import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedicoDTO } from 'src/app/core/dto/medico.dto';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaSaveDTO } from 'src/app/core/dto/receita-save.dto.';
import { ReceitaDTO } from 'src/app/core/dto/receita.dto';
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
    let medico: MedicoDTO = this.tokenStorage.getUser();

    this.searchForm.get("busca")?.valueChanges.subscribe(cpfFiltrado => {
      this.receitaService.listarReceitas(medico.crm, medico.cnpjHospital, cpfFiltrado).subscribe({
        next: resp => {
          this.items = [];
          resp.forEach(receita => {
            this.items.push({
              cpfPaciente: receita.paciente.cpf,
              hash: receita.hash,
              status: receita.status,
              dtInsercao: receita.dtInsercao
            })
          });
        }
      });
    });
    this.receitaService.listarReceitas(medico.crm, medico.cnpjHospital, "").subscribe({
      next: resp => {
        resp.forEach(receita => {
          this.items.push({
            cpfPaciente: receita.paciente.cpf,
            hash: receita.hash,
            status: receita.status,
            dtInsercao: receita.dtInsercao
          })
        });
      }
    });
  }

  public items: Array<ReceitaListDTO> = Array<ReceitaListDTO>();

  public cols = [
    { field: 'dtInsercao', header: 'Data de Insercão', isDate: true, isDoc: false },
    { field: 'cpfPaciente', header: 'CPF do Paciente', isDate: false, isDoc: true },
    { field: 'status', header: 'Status do Registro', isDate: false, isDoc: false }
  ];

}
