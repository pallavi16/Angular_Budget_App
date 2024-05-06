import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods {
      
        return this.getAll().find(food => food.id == id)!;
      
  }

  getAllTags(): Tag[] { 
      return [
        {name: 'All', count: 17},
        {name: 'Bakery', count: 1},
        {name: 'Sweets', count: 1},
        {name: 'Desserts', count: 1},
        {name: 'FastFood', count: 8},
        {name: 'Sandwich', count: 2},
        {name: 'CafeFood', count: 2},
        {name: 'Snacks', count: 3},
        {name: 'Lunch', count: 7},
        {name: 'Chinese', count: 2},
        {name: 'Pizza', count: 2},
        {name: 'Pasta', count: 1},
        {name: 'Italian', count: 1},
        {name: 'Healthy', count: 2},
        {name: 'Salad', count: 2},
        {name: 'Fried', count: 5},
        {name: 'Kids', count: 1},
        {name: 'Dinner', count: 1},
        
      ]
  }

  getAllFoodByTag(tag:string): Foods[] {
    if(tag === 'All') 
      return this.getAll()
    else
      return this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Foods[] {
    return [
      {
      id: 1,
      price: 21.99,
      name: 'Cake',
      favorite: true,
      star: 4.3,
      tags: ['Bakery', 'Sweets', 'Desserts'],
      imageUrl: '/assets/redketchup/image.jpg',
      cookTime: '35-40',
      origins: ['Europe', 'US', 'Belgium'],
      },
      {
        id: 2,
        price: 7.29,
        name: 'Sandwich',
        favorite: false,
        star: 3.9,
        tags: ['FastFood', 'Sandwich', 'CafeFood', 'Snacks'],
        imageUrl: '/assets/redketchup/image1.jpg',
        cookTime: '10-12',
        origins: ['US', 'India', 'Europe'],
        },
        {
          id: 3,
          price: 9.99,
          name: 'Burger',
          favorite: false,
          star: 4.0,
          tags: ['FastFood', 'Lunch', 'CafeFood'],
          imageUrl: '/assets/redketchup/image2.jpg',
          cookTime: '10-15',
          origins: ['US', 'Italy'],
          },
          {
            id: 4,
            price: 12.99,
            name: 'Pizza',
            favorite: true,
            star: 4.5,
            tags: ['Pizza', 'FastFood', 'Lunch'],
            imageUrl: '/assets/redketchup/image3.jpg',
            cookTime: '12-15',
            origins: ['Italy', 'Europe', 'UK'],
            },
            {
              id: 5,
              price: 11,
              name: 'Noodles',
              favorite: true,
              star: 4.5,
              tags: ['Chinese', 'FastFood', 'Lunch'],
              imageUrl: '/assets/redketchup/image4.jpg',
              cookTime: '30-40',
              origins: ['China', 'India', 'Vietnam', 'Japan'],
              },
              {
                id: 6,
                price: 17.20,
                name: 'Linguine',
                favorite: false,
                star: 3.1,
                tags: ['Pasta', 'FastFood', 'Lunch','Italian'],
                imageUrl: '/assets/redketchup/image5.jpg',
                cookTime: '15-20',
                origins: ['Italy', 'Europe', 'US'],
                },
                {
                  id: 7,
                  price: 15.49,
                  name: 'Salad',
                  favorite: false,
                  star: 2.8,
                  tags: ['Healthy', 'Salad'],
                  imageUrl: '/assets/redketchup/image6.jpg',
                  cookTime: '10-12',
                  origins: ['Europe', 'India', 'US'],
                  },
                  {
                    id: 8,
                    price: 10.5,
                    name: 'Fried Chicken',
                    favorite: true,
                    star: 4.8,
                    tags: ['FastFood', 'Fried', 'Snacks'],
                    imageUrl: '/assets/redketchup/image7.jpg',
                    cookTime: '35-40',
                    origins: ['US', 'Italy'],
                    },
                    {
                      id: 9,
                      price: 5.30,
                      name: 'Fries',
                      favorite: true,
                      star: 4.5,
                      tags: ['Fried', 'Snacks', 'Kids'],
                      imageUrl: '/assets/redketchup/image8.jpg',
                      cookTime: '10-12',
                      origins: ['US', 'India', 'UK'],
                      },
                      {
                        id: 10,
                        price: 12,
                        name: 'Meatballs',
                        favorite: false,
                        star: 4.1,
                        tags: ['Lunch', 'FastFood', 'Fried'],
                        imageUrl: '/assets/redketchup/image9.jpg',
                        cookTime: '40-50',
                        origins: ['Korean', 'US', 'Italy'],
                        },
                        {
                          id: 11,
                          price: 15.49,
                          name: 'Machurian',
                          favorite: false,
                          star: 3.7,
                          tags: ['Fried', 'Lunch', 'FastFood'],
                          imageUrl: '/assets/redketchup/image10.jpg',
                          cookTime: '35-40',
                          origins: ['Indian', 'Chinese'],
                          },
                          {
                            id: 12,
                            price: 13.99,
                            name: 'Wraps',
                            favorite: false,
                            star: 3.8,
                            tags: ['Dinner', 'Lunch', 'Healthy'],
                            imageUrl: '/assets/redketchup/image11.jpg',
                            cookTime: '20-25',
                            origins: ['Middle Eastern', 'US'],
                            }
    ]
  }
}


/* '/assets/redketchup/image.jpg',
'/assets/redketchup/image1.jpg',
'/assets/redketchup/image2.jpg',
'/assets/redketchup/image3.jpg',
'/assets/redketchup/image4.jpg',
'/assets/redketchup/image5.jpg',
'/assets/redketchup/image6.jpg',
'/assets/redketchup/image7.jpg',
'/assets/redketchup/image8.jpg',
'/assets/redketchup/image9.jpg',
'/assets/redketchup/image10.jpg',
'/assets/redketchup/image11.jpg'
*/