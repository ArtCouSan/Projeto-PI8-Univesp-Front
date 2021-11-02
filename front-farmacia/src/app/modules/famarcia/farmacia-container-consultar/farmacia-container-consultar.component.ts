import { Component, OnInit } from '@angular/core';
import { FarmaciaDTO } from 'src/app/core/dto/farmacia.dto';
import { FarmaciaService } from 'src/app/core/service/farmacia.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-farmacia-container-consultar',
  templateUrl: './farmacia-container-consultar.component.html',
  styleUrls: ['./farmacia-container-consultar.component.scss']
})
export class FarmaciaContainerConsultarComponent implements OnInit {

  public cols = [
    { field: 'cnpj', header: 'CNPJ', isDate: false },
    { field: 'nomeFilial', header: 'Nome Filial', isDate: false }
  ];

  public items: Array<FarmaciaDTO> = Array<FarmaciaDTO>();

  constructor(private tokenService: TokenStorageService,
    private readonly farmaciaService: FarmaciaService) { }

  ngOnInit(): void {
    const user = this.tokenService.getUser();
    this.farmaciaService.listFarmacias(user.cnpj).subscribe({
      next: resp => {
        this.items = resp;
      }
    });
  }

}
