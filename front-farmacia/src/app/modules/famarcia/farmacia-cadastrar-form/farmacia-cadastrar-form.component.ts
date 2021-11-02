import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { Admin } from 'src/app/core/dto/admin.dto';
import { FarmaciaSaveDTO } from 'src/app/core/dto/farmacia-save.dto';
import { FarmaciaUpdateDTO } from 'src/app/core/dto/farmacia-update.dto';
import { FarmaciaService } from 'src/app/core/service/farmacia.service';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Component({
  selector: 'app-farmacia-cadastrar-form',
  templateUrl: './farmacia-cadastrar-form.component.html',
  styleUrls: ['./farmacia-cadastrar-form.component.scss']
})
export class FarmaciaCadastrarFormComponent implements OnInit {

  @Input() id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  farmaciaForm = new FormGroup({
    nomeFilial: new FormControl(''),
  });

  constructor(private readonly tokenService: TokenStorageService,
    private readonly farmaciaService: FarmaciaService,
    private readonly messageService: MessageService,
    private readonly router: Router) { }

  ngOnInit(): void {
    if (this.id.value) {
      this.farmaciaService.findFarmacia(this.id.value).subscribe({
        next: resp => {
          this.farmaciaForm.controls["nomeFilial"].setValue(resp.nomeFilial);
        }
      });
    }
  }

  public onSubmit() {
    const user: Admin = this.tokenService.getUser();
    if (this.id.value) {
      const farmacia: FarmaciaUpdateDTO = {
        nomeFilial: this.farmaciaForm.get('nomeFilial')?.value
      }
      this.farmaciaService.updateFarmacia(this.id.value, farmacia).subscribe(
        data => {
          this.messageService.clear();
          this.messageService.add({ severity: 'success', summary: 'Farmacia atualizada', detail: "Acesse a listagem para consulta-la" });
          this.router.navigateByUrl('/farmacia/consultar');
        },
        errUser => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Farmacia não encontrada', detail: errUser.error.message });
        });
    } else {
      const farmacia: FarmaciaSaveDTO = {
        cnpj: user.cnpj,
        nomeFilial: this.farmaciaForm.get('nomeFilial')?.value
      }
      this.farmaciaService.saveFarmacia(farmacia).subscribe(
        data => {
          this.farmaciaForm.reset();
          this.messageService.clear();
          this.messageService.add({ severity: 'success', summary: 'Farmacia atualizada', detail: "Acesse a listagem para consulta-la" });
        },
        errUser => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Farmacia não encontrada', detail: errUser.error.message });
        });
    }

  }

}
