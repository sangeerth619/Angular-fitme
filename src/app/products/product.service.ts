import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      name: 'Gold Ring',
      description: 'A beautiful gold ring.',
      price: 150.00,
      imageUrl: 'assets/images/3.jpg'  // Updated path to your image
    },
    {
      id: 2,
      name: 'Diamond Necklace',
      description: 'Elegant diamond necklace.',
      price: 500.00,
      imageUrl: 'assets/images/13.jpg'  // Updated path to your image
    }
    // Add more products as needed
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
