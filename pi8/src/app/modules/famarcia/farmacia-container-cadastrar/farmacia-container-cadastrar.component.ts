import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-farmacia-container-cadastrar',
  templateUrl: './farmacia-container-cadastrar.component.html',
  styleUrls: ['./farmacia-container-cadastrar.component.scss']
})
export class FarmaciaContainerCadastrarComponent implements OnInit {

  public sub: any;
  public id: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id.next(params['id']);
   });
  }

}
