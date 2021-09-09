import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44335/api/';

  constructor(private http: HttpClient) { }

  public getProducts():Observable<ProductResponseModel> {
    return this.http.get<ProductResponseModel>(this.apiUrl + 'products/getall');
  }

}
