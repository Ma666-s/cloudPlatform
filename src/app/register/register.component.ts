import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
Image:String = "/assets/Dark Blue.png"
ImageTwo:String = "/assets/back.jpg"
regiteration = new FormGroup({
UserName:new FormControl(''),
Email: new FormControl(''),
Password: new FormControl(''),
ConfirmPassword: new FormControl('')
  })


}
