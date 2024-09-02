import { Injectable } from '@angular/core';
// import { CartItem } from './cart.model';
import { CartItem } from './cart/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(item: CartItem): void {
    this.cartItems.push(item);
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
