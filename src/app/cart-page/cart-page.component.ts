import { Component } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent {
  constructor(private cartService: CartService) {
    
    // let foods = fs.getAll();
    // cartService.addtoCart(foods[0]);
    // cartService.addtoCart(foods[1]);
    // cartService.addtoCart(foods[2]);
    // cartService.addtoCart(foods[3]);
    // cartService.addtoCart(foods[4]);
    // cartService.addtoCart(foods[5]);
    // cartService.addtoCart(foods[6]);
    // cartService.addtoCart(foods[7]);
    this.setCart();
  }
  cart!: Cart;

  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removefromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantity:string) {
    const q = parseInt(quantity);
    this.cartService.changeQuantity(cartItem.food.id, q);
    this.setCart();
  }

}
