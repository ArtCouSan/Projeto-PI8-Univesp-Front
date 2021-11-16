import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FarmaceuticoDTO } from 'src/app/core/dto/farmaceutico.dto';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import * as fileSaver from 'file-saver';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() cols: any;
  @Input() items: Array<ReceitaListDTO> = Array<ReceitaListDTO>();

  constructor(private readonly receitaService: ReceitaService,
    private tokenStorage: TokenStorageService,
    private messageService: MessageService) { }

  ngOnInit(): void {
  }

  public baixarReceita(hash: string) {
    this.receitaService.buscarReceita(hash).subscribe({
      next: resp => {
        let blob:any = new Blob([resp], { type: 'text/json; charset=utf-8' });
        fileSaver.saveAs(blob, 'receita.pdf');
      }, error: error => {
        window.location.reload();
        this.messageService.clear();
        this.messageService.add({severity:'error', summary:'Erro ao baixar receita', detail:''});
      }
    });
  }
}
