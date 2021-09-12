import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44335/api/products/';

  constructor(private http: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.apiUrl + 'getall');
  }

  getProductsByCategory(categoryId: number):Observable<ListResponseModel<Product>> {
    return this.http.get<ListResponseModel<Product>>(this.apiUrl + 'getbycategory?categoryId=' + categoryId);
  }

  add(product: Product):Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + 'add', product);
  }

}
