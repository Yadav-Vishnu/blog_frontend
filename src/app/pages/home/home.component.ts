import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layout/post-card/post-card.component';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostCardComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  posts!: Array<any>;
  latest_posts!: Array<any>;

  constructor(private post_services: PostService) {}

  async ngOnInit() {
    this.posts = await this.post_services.loadData();
    this.latest_posts = await this.post_services.load_Latest_Data();
  }

  async post(){
  this.posts = await  this.post_services.loadData();
  // console.log(this.posts);
  
  }

  async latest(){
    this.latest_posts = await  this.post_services.load_Latest_Data();
    // console.log(this.posts);
    
    }


}
