import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const products = [
      {
        "productId": 2,
        "productName": "Laptop",
        "productCode": "CND511",
        "releaseDate": "April 20 20",
        "description": "Gaming laptop",
        "price": 400,
        "starRating": 2,
        "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/300436/worm6.png"
        },
        {
        "productId": 3,
        "productName": "Hammer",
        "productCode": "B77D5",
        "releaseDate": "April 21 21",
        "description": "A gift from Asgard",
        "price": 8,
        "starRating": 5,
        "imageUrl": "https://openclipart.org/image/2400px/svg_to_png/300436/worm6.png"
        }
    ];
    return {products};
  }
  constructor() { }

}
