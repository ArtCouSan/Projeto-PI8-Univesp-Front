import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-farmacia-cadastrar-form',
  templateUrl: './farmacia-cadastrar-form.component.html',
  styleUrls: ['./farmacia-cadastrar-form.component.scss']
})
export class FarmaciaCadastrarFormComponent implements OnInit {

  farmaciaForm = new FormGroup({
    cnpj: new FormControl(''),
    nomeFantasia: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
