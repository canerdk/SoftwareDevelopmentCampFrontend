import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44335/api/';

  constructor(private http: HttpClient) { }

  public getProducts():Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.apiUrl + 'products/getall');
  }

  public getProductsByCategory(categoryId: number):Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.apiUrl + 'products/getbycategory?categoryId=' + categoryId);
  }

}
