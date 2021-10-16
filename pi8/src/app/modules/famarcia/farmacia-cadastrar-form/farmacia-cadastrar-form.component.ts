import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FarmaciaService } from 'src/app/core/service/farmacia.service';

@Component({
  selector: 'app-farmacia-cadastrar-form',
  templateUrl: './farmacia-cadastrar-form.component.html',
  styleUrls: ['./farmacia-cadastrar-form.component.scss']
})
export class FarmaciaCadastrarFormComponent implements OnInit {

  @Input() id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  farmaciaForm = new FormGroup({
    cnpj: new FormControl(''),
    nomeFantasia: new FormControl(''),
  });

  constructor(private readonly farmaciaService: FarmaciaService) { }

  ngOnInit(): void {
    if(this.id.value) {
      this.farmaciaService.findFarmacia(this.id.value).subscribe({
        next: resp => {
          this.farmaciaForm.controls["cnpj"].setValue(resp.cnpj);
          this.farmaciaForm.controls["nomeFantasia"].setValue(resp.nomeFantasia);
        }
      });
    }
  }

}
