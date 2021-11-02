import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FarmaceuticoService } from 'src/app/core/service/farmaceutico.service';

@Component({
  selector: 'app-farmaceutico-cadastrar-form',
  templateUrl: './farmaceutico-cadastrar-form.component.html',
  styleUrls: ['./farmaceutico-cadastrar-form.component.scss']
})
export class FarmaceuticoCadastrarFormComponent implements OnInit {

  @Input() id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  farmaceuticoForm = new FormGroup({
    nome: new FormControl(''),
    status: new FormControl(''),
    cpf: new FormControl('')
  });

  constructor(private readonly farmaceuticoService: FarmaceuticoService) { }

  ngOnInit(): void {
    if(this.id.value) {
      this.farmaceuticoService.findFarmaceutico(this.id.value).subscribe({
        next: resp => {
          this.farmaceuticoForm.controls["nome"].setValue(resp.nome);
          this.farmaceuticoForm.controls["status"].setValue(resp.status);
          this.farmaceuticoForm.controls["cpf"].setValue(resp.cpf);
        }
      });
    }
  }

}
