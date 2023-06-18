import { Component } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent {
}
export interface IProduct
{
  ID:Number,
  Name:String,
  Quantity:Number,
  Price:Number,
  Image:String
}
export interface ICategory
{
  ID:Number,
  Name:String
}
export enum DiscountOffers
{
  Nodiscount = 0,
  Down = 10,
  Up = 15
}