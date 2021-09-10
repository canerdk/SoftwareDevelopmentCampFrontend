import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44335/api/';

  constructor(private http: HttpClient) { }

  public getCategories():Observable<ListResponseModel<Category>> {
    return this.http.get<ListResponseModel<Category>>(this.apiUrl + 'categories/getall');
  }
}
