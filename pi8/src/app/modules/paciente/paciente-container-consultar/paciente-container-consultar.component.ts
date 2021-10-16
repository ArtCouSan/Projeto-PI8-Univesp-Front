import { Component, OnInit } from '@angular/core';
import { PacienteDTO } from 'src/app/core/dto/paciente.dto';
import { PacienteService } from 'src/app/core/service/paciente.service';

@Component({
  selector: 'app-paciente-container-consultar',
  templateUrl: './paciente-container-consultar.component.html',
  styleUrls: ['./paciente-container-consultar.component.scss']
})
export class PacienteContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cpf', header: 'CPF', isDate: false },
    { field: 'nome', header: 'Nome Completo', isDate: false },
    { field: 'status', header: 'Status', isDate: false }
  ];

  public items: Array<PacienteDTO> = Array<PacienteDTO>();

  constructor(private readonly pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.listPacientes().subscribe({
      next: resp => {
        this.items = resp;
      }
    });
  }

}
