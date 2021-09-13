import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginModel: LoginModel;

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.email],
      password: ["", Validators.required]
    });
  }

  login(){
    if(this.loginForm.valid){
      this.loginModel = Object.assign({}, this.loginForm.value)
      this.authService.login(this.loginModel).subscribe(response => {
        this.toastr.info(response.message);
        localStorage.setItem("token", response.data.token);
      }, err => {
        this.toastr.error(err.error)
      });
    }
  }

  

}
