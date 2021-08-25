import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/event.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  public model:Evento = new Evento('','',0,'../../assets/img/user.png','','','','');
  constructor() { }

  ngOnInit(): void {
  }

  addContact(){
    this.model = new Evento('','',0,'../../assets/img/user.png','','','','');
  }

  addImage(event:any){
    const file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (evt) => {
      this.model.picture = <string>reader.result;
    }
  }

}
