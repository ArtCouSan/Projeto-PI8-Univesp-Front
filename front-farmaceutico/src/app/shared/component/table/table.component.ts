import { Component, Input, OnInit } from '@angular/core';
import * as fileSaver from 'file-saver';
import { MessageService } from 'primeng/api';
import { ReceitaListDTO } from 'src/app/core/dto/receita-list.dto';
import { ReceitaService } from 'src/app/core/service/receita.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';
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
        let blob: any = new Blob([resp], { type: 'text/json; charset=utf-8' });
        fileSaver.saveAs(blob, 'receita.pdf');
      }, error: error => {
        window.location.reload();
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Erro ao baixar receita', detail: '' });
      }
    });
  }

  public analisarReceita(hash: string, receitaDTO: ReceitaListDTO) {
    this.receitaService.analisarReceitaPacienteComoFarmaceuticorReceitasFarmaceutico(hash, receitaDTO.crfFarmaceutico, receitaDTO.cnpjFarmaceutico).subscribe({
      next: resp => {
        this.items = this.items.filter(item => item.hash != hash);
        this.messageService.clear();
        this.messageService.add({ severity: 'success', summary: 'Receita está sua lista em analise!', detail: '' });
      }, error: error => {
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Erro ao analisar a receita', detail: error.error.message });
      }
    });
  }

  public devolverReceita(hash: string) {
    this.receitaService.devolverReceitaPacienteComoFarmaceuticorReceitasFarmaceutico(hash).subscribe({
      next: resp => {
        this.items = this.items.filter(item => item.hash != hash);
        this.messageService.clear();
        this.messageService.add({ severity: 'success', summary: 'Receita na devolvida para lista!', detail: '' });
      }, error: error => {
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Erro ao devolver a receita', detail: error.error.message });
      }
    });
  }

  public finalizarReceita(hash: string, receitaDTO: ReceitaListDTO) {
    this.receitaService.finalizarReceitaPacienteComoFarmaceuticorReceitasFarmaceutico(hash, receitaDTO.crfFarmaceutico, receitaDTO.cnpjFarmaceutico).subscribe({
      next: resp => {
        this.items = [];
        resp.forEach(receita => {
          this.items.push({
            crfFarmaceutico: receita.farmaceutico?.crf ? receita.farmaceutico.crf : '-',
            crmMedico: receita.medico?.crm ? receita.medico.crm : '-',
            cpfPaciente: receita.paciente.cpf,
            hash: receita.hash,
            status: receita.status,
            dtInsercao: receita.dtInsercao,
            cnpjFarmaceutico: receita.farmaceutico?.cnpjFarmacia ? receita.farmaceutico?.cnpjFarmacia : '-'
          })
        });
        this.messageService.clear();
        this.messageService.add({ severity: 'success', summary: 'Receita finalizada :)', detail: '' });
      }, error: error => {
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Erro ao finalizar a receita', detail: error.error.message });
      }
    });
  }

}
