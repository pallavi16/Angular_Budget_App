import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { NgFor } from '@angular/common';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { NotFoundComponent } from '../not-found/not-found.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, SearchComponent, TagsComponent, RouterModule, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods: Foods[] = []
  constructor(private fs: FoodService, private router:ActivatedRoute) {  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['searchItem']) 
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()) )
      else if(params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag'])
      
      else 
      this.foods = this.fs.getAll();  
    })
  }

}
