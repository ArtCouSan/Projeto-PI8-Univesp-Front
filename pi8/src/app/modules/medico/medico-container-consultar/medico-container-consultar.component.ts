import { Component, OnInit } from '@angular/core';
import { MedicoDTO } from 'src/app/core/dto/medico.dto';
import { MedicoService } from 'src/app/core/service/medico.service';

@Component({
  selector: 'app-medico-container-consultar',
  templateUrl: './medico-container-consultar.component.html',
  styleUrls: ['./medico-container-consultar.component.scss']
})
export class MedicoContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'crm', header: 'CRM', isDate: false },
    { field: 'cpf', header: 'CPF', isDate: false },
    { field: 'nome', header: 'Nome Completo', isDate: false },
    { field: 'status', header: 'Status', isDate: false }
  ];

  public items: Array<MedicoDTO> = Array<MedicoDTO>();

  constructor(private readonly medicoService: MedicoService) { }

  ngOnInit(): void {
    this.medicoService.listMedicos().subscribe({
      next: resp => {
        this.items = resp;
      }
    })
  }

}
