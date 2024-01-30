import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})


export class CategoryNavbarComponent implements OnInit{
  data!: Array<any>; // Use the interface here

  constructor(private post_cat:CategoriesService){
    
  }
   async ngOnInit() {
    await this.load();
    return ;
  }
  async load(){
    this.data = await this.post_cat.loadData();
    // console.log(this.data);
  }
}
