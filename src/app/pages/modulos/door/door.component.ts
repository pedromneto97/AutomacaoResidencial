import {Component, Input, OnInit} from '@angular/core';
import {faDoorClosed, faDoorOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.css']
})
export class DoorComponent implements OnInit {

  @Input() name;
  public porta;

  constructor() {
    this.porta = this.estado(true);
  }

  ngOnInit() {
  }

  estado(estado: boolean) {
    return estado ? faDoorOpen : faDoorClosed;
  }

}
