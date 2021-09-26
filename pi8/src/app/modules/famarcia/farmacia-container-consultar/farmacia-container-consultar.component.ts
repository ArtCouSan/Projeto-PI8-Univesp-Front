import { Component, OnInit } from '@angular/core';
import { FarmaciaDTO } from 'src/app/core/farmacia.dto';

@Component({
  selector: 'app-farmacia-container-consultar',
  templateUrl: './farmacia-container-consultar.component.html',
  styleUrls: ['./farmacia-container-consultar.component.scss']
})
export class FarmaciaContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cnpj', header: 'CNPJ' },
    { field: 'nomeFantasia', header: 'Nome Fantasia' }
  ];

  public items: Array<FarmaciaDTO> = Array<FarmaciaDTO>();

  constructor() { }

  ngOnInit(): void {
    this.items.push({
      cnpj: "1234",
      nomeFantasia: "Teste"
    });
    this.items.push({
      cnpj: "12345",
      nomeFantasia: "Teste 2"
    });
    this.items.push({
      cnpj: "123456",
      nomeFantasia: "Teste 3"
    });
    this.items.push({
      cnpj: "1234567",
      nomeFantasia: "Teste 4"
    });
  }

}
