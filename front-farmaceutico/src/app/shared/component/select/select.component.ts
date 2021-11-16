import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  
  @Input() parentForm: any;
  @Input() name: string = '';

  @Input() behaviorSubjectCnpj$ = new BehaviorSubject<[{}]>([
    {name: 'Preencha o CRF', code: ''}
  ]);

  constructor() {}
}
