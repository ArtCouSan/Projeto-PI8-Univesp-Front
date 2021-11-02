import { Component, OnInit } from '@angular/core';
import { FarmaceuticoDTO } from 'src/app/core/dto/farmaceutico.dto';
import { FarmaceuticoService } from 'src/app/core/service/farmaceutico.service';

@Component({
  selector: 'app-farmaceutico-container-consultar',
  templateUrl: './farmaceutico-container-consultar.component.html',
  styleUrls: ['./farmaceutico-container-consultar.component.scss']
})
export class FarmaceuticoContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cpf', header: 'CPF', isDate: false },
    { field: 'nome', header: 'Nome Completo', isDate: false },
    { field: 'status', header: 'Status', isDate: false }
  ];

  public items: Array<FarmaceuticoDTO> = Array<FarmaceuticoDTO>();

  constructor(private readonly farmaceuticoService: FarmaceuticoService) { }

  ngOnInit(): void {
    this.farmaceuticoService.listFarmaceuticos().subscribe({
      next: resp => {
        this.items = resp;
      }
    });
  }
}
