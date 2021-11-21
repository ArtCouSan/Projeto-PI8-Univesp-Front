import { Component, Input } from '@angular/core';
import * as fileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() cols: any;
  @Input() items: Array<ReceitaListDTO> = Array<ReceitaListDTO>();

  constructor(private readonly receitaService: ReceitaService,
    private messageService: MessageService) { }

  public baixarReceita(hash: string) {
    this.receitaService.buscarReceita(hash).subscribe({
      next: resp => {
        let blob: any = new Blob([resp], { type: 'text/json; charset=utf-8' });
        fileSaver.saveAs(blob, 'receita.pdf');
      }, error: error => {
        window.location.reload();
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Erro ao baixar receita', detail: '' });
      }
    });
  }

  public showQrcode(receita: ReceitaListDTO) {
    receita.showQrcode = true;
  }

}
