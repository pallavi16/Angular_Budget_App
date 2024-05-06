import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../shared/tag';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {
 
  @Input()
  value?:string[];
 
  tags: Tag[] =[];

    constructor(private fs: FoodService) {}

      ngOnInit(): void {
        if(!this.value)
        this.tags = this.fs.getAllTags();
      }
}
