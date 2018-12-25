import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-luminosidade',
  templateUrl: './luminosidade.component.html',
  styleUrls: ['./luminosidade.component.css']
})
export class LuminosidadeComponent implements OnInit {

  public tipo: string;
  public luminosidade: number;

  constructor() {
    this.luminosidade = 70;
    if (this.luminosidade >= 30) {
      this.tipo = 'far';
    } else {
      this.tipo = 'fas';
    }
  }

  ngOnInit() {
  }

}
