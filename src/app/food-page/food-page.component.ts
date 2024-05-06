import { Component } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { TagsComponent } from '../tags/tags.component';
import { CartService } from '../services/cart.service';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, TagsComponent, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
food!: Foods;
constructor(private activatedRoute: ActivatedRoute,
    private fs: FoodService, private cartService: CartService,
    private router: Router) {
      activatedRoute.params.subscribe((params) => {
        if(params['id']) 
          this.food = fs.getFoodById(params['id'])
      })
    }
  addToCart() {
    this.cartService.addtoCart(this.food);
    this.router.navigateByUrl('/cart');
  }    
}
