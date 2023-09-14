import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
imageUrl:string="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
date:string="26 December 2019"
title:string="Iphone xs"
text:string="fancy smartphone that you don't need"
details:boolean=true

showDetails(){
  this.details=!this.details
}
}
