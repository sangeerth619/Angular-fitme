import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  addToCart(product: Product): void {
    // Add the product to the cart
    console.log(`Product ${product.name} added to cart!`);
  }
}
