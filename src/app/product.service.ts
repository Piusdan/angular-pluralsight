import { Injectable } from '@angular/core';
import { IProduct } from "./products/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class ProductService {

  private productUrl = 'api/products.json';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
  }
}
