import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-presenca',
  templateUrl: './presenca.component.html',
  styleUrls: ['./presenca.component.css']
})
export class PresencaComponent implements OnInit {

  public tipo: string;

  constructor() {
    this.tipo = this.presente(false);
  }

  ngOnInit() {
  }

  presente(presente: boolean) {
    return presente ? 'far' : 'fas';
  }

}
