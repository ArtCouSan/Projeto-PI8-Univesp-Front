import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface OptionsList {
  name: string,
  code: string
}
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  @Input() display: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  @Output() displayChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  public opcoes: Array<OptionsList> = Array<OptionsList>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.opcoes = [
      { name: 'Consultar Receitas', code: 'farma' },
      { name: 'Cadastrar Receita', code: 'RC' },
      { name: 'Consultar Farmacias', code: 'farmacia/consultar' },
      { name: 'Cadastrar Farmacia', code: 'farmacia/cadastrar' },
      { name: 'Consultar Médicos', code: 'MS' },
      { name: 'Cadastrar Médico', code: 'MC' },
      { name: 'Consultar Pacientes', code: 'PS' },
      { name: 'Cadastrar Paciente', code: 'PC' }
    ];
  }

  selecionadoImte($event: any) {
    this.router.navigate([$event.value.code]);
  }

  changeVisible($event: any) {
    this.displayChange.emit($event);
  }

}
