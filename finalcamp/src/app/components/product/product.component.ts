import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

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


}
