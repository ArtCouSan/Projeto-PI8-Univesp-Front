import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-farmaceutico-container-cadastrar',
  templateUrl: './farmaceutico-container-cadastrar.component.html',
  styleUrls: ['./farmaceutico-container-cadastrar.component.scss']
})
export class FarmaceuticoContainerCadastrarComponent implements OnInit {

  public sub: any;
  public id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id.next(params['id']);
   });
  }

}
