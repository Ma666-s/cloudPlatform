import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/Services/product-service.service';

@Component({
  selector: 'app-iproduct',
  templateUrl: './iproduct.component.html',
  styleUrls: ['./iproduct.component.scss']
})
export class IProductComponent {
ProductList:any= [];
constructor(private productservise:ProductServiceService) {}
ngOnInit(): void {
  this.ProductList=this.productservise.getAllProducts();
}
}
