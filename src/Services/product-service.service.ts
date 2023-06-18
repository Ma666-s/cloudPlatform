import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  ProductList= [
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
  constructor() { }

  getAllProducts()
  {
    return this.ProductList
  }
  getProductid(prdid: number) {
    if(typeof prdid !== 'number')
    {
      return null;
    }
    const IProduct = this.ProductList.find((product) => product.ID == prdid);

    if(!IProduct)
    {
      return null;
    }
    return IProduct;
    }
}
