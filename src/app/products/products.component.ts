import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: String = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  listFilter: string;
  products: IProduct[];

  showImage: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getsProducts;
  }

  getsProducts(): void{
    this.productService.getProducts()
        .subscribe(products => this.products = products);    
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}
