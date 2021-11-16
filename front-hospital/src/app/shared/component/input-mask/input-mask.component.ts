import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.scss']
})
export class InputMaskComponent implements OnInit {
  
  @Input() parentForm: any;
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() mask: string = '';
  @Input() unmask: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
