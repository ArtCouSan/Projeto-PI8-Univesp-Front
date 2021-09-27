import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-medico-cadastrar-form',
  templateUrl: './medico-cadastrar-form.component.html',
  styleUrls: ['./medico-cadastrar-form.component.scss']
})
export class MedicoCadastrarFormComponent implements OnInit {

  medicoForm = new FormGroup({
    nome: new FormControl(''),
    status: new FormControl(''),
    crm: new FormControl(''),
    cpf: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
