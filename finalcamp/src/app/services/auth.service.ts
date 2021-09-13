import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:44335/api/auth/';

  constructor(private http: HttpClient) { }

  login(loginModel: LoginModel): Observable<SingleResponseModel<TokenModel>> {
    return this.http.post<SingleResponseModel<TokenModel>>(this.apiUrl + 'login', loginModel);
  }

  isAuthenticated() {
    if(localStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  }
}
