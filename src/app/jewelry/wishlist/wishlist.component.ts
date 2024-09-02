import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  wishlistItems: string[] = ['Ring', 'Necklace', 'Bracelet'];

  removeItem(item: string) {
    this.wishlistItems = this.wishlistItems.filter(i => i !== item);
  }
}
