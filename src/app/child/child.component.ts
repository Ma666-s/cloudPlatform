import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
@Input() parentData :any;
@Output() ChildEvent = new EventEmitter()
 rendervalues()
{
console.log("Bienvenue");
}
SendData()
{
  this.ChildEvent.emit("Welcome in Shopping Hall");
}
}
