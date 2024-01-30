import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layout/post-card/post-card.component';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-category',
  standalone: true,
  imports: [PostCardComponent,CommonModule],
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent implements OnInit{
  postArray!:Array<any>;
  name:any;
  constructor(private route:ActivatedRoute,private post:PostService) {
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      // console.log(val['id']);
      this.post.loadCategotyPost(val['id']).then(data=>{
        this.postArray = data;
        this.name= val['category'];
        // console.log(this.name);
        
        return ;
      });
      
    });
    // console.log(this.postArray);
    
  }
}
