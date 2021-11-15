import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MedicoDTO } from 'src/app/core/dto/medico.dto';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
import * as fileSaver from 'file-saver';
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

  public deletarReceita(hash: string) {
    let medico: MedicoDTO = this.tokenStorage.getUser();
    this.receitaService.deletarReceita(hash, medico.crm).subscribe({
      next: resp => {
        window.location.reload();
        this.messageService.clear();
        this.messageService.add({severity:'success', summary:'Receita cancelada com sucesso', detail:''}); 
      }, error: error => {
        window.location.reload();
        this.messageService.clear();
        this.messageService.add({severity:'error', summary:'Erro ao cancelar receita', detail:''});
      }
    });
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
    });;
  }

}
