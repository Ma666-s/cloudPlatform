import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';

enum DiscountOffers {
  Nodiscount = 0,
  Down = 10,
  Up = 15,
}
interface IProduct {
  ID: Number;
  Name: String;
  Quantity: Number;
  Price: Number;
  Image: String;
}
interface ICategory {
  ID: Number;
  Name: String;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  img:String="/assets/twapel.jpg"
  imgone:String="/assets/icons8.png"
  imgtwo:String="/assets/Cake.jpg"
  imgthree:String="/assets/Drink.jpg"
  imgfour:String="/assets/Burger.jpg"
  Nodiscount:boolean=false;

  Dropdown = ['Item 1', 'Item 2', 'Item 3'];
  Discount: DiscountOffers = DiscountOffers.Nodiscount;
  StoreName: string = '';
  StoreLogo: string = '';
  // ProductList: IProduct[] = [];
  CategoryList: ICategory[] = [];
  ClientName: string = '';
  IsPurchased: boolean = false;
  Product: string = '';
  ProductList: IProduct[] = [
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
  constructor() {
    this.Discount = DiscountOffers.Nodiscount;
    this.StoreName = 'My Store';
    this.StoreLogo = 'https://www.example.com/logo.png';
    (this.CategoryList = []),
      [{ ID: 301 }, { Name: 'CategoryOne' }],
      [{ ID: 302 }, { Name: 'CategoryTwo' }],
      [{ ID: 303 }, { Name: 'CategoryThree' }],
      [{ ID: 304 }, { Name: 'CategoryFour' }];
    this.ClientName = 'Mohamed Ahmed';
  }
  Buy(Message:string) {
    this.Product = Message
    
    if (this.IsPurchased == true) {
      this.IsPurchased = false;
    } else {
      this.IsPurchased = true;
    }
  }
}
