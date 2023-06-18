import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss'],
})
export class NgForComponent {
  ProductList: any[] = [
    {
      ID: 501,
      Name: 'ProductOne',
      Price: 10000,
      Quantity: 10,
      Image: 'xx.png',
    },
    {
      ID: 502,
      Name: 'ProductTwo',
      Price: 11000,
      Quantity: 20,
      Image: 'zz.png',
    },
    {
      ID: 503,
      Name: 'ProductThree',
      Price: 5000,
      Quantity: 20,
      Image: 'ff.png',
    },
    {
      ID: 504,
      Name: 'ProductFour',
      Price: 11000,
      Quantity: 20,
      Image: 'jj.png',
    },
  ];
}
