import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  product: Product;
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  add() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
      this.productService.add(this.product).subscribe(response => {
        this.toastr.success("Ürün eklendi");
      }, err => {
        if(err.error.Errors.length > 0) {
          for (let i = 0; i < err.error.Errors.length; i++) {
            this.toastr.error(err.error.Errors[i].ErrorMessage);
          }
        }
      });
    } else {
      this.toastr.error("Alanları doğru giriniz.");
    }
  }
}
