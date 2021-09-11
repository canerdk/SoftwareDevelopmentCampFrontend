import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getParamsFromUrl();
  }

  getParamsFromUrl() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.getProductsByCategory(params['id']);
      } else {
        this.getProducts();
      }


    });
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data;
      this.dataLoaded = true;
    })
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.toastr.success(product.name + " eklendi");
  }


}
