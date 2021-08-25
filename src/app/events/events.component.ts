import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import {Evento} from 'src/app/event.model';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})



export class EventsComponent implements OnInit {
  public model:Evento = new Evento('','',0,'../../assets/img/user.png','','','','');
  constructor() { }

  ngOnInit(): void {
  }
}
