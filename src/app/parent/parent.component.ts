import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
Message:string='welcome on board';
MessageData:any;
@ViewChild(ChildComponent) child: ChildComponent;

ngAfterViewInit(){
 this.child.rendervalues
}

}
