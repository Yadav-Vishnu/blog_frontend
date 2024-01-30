import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '../../layout/post-card/post-card.component';
import { CommentFormComponent } from '../../comments/comment-form/comment-form.component';
import { CommentListComponent } from '../../comments/comment-list/comment-list.component';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [PostCardComponent,CommentFormComponent,CommentListComponent,CommonModule],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit {
  post_data:any;
  similar_post!:Array<any>;
  category_Id:string='';
  constructor(private one:PostService,public post:ActivatedRoute){

    // this.load_similar(this.category_Id);
  }
  ngOnInit() {
    this.post.params.subscribe(val=>{
      // this.load(val['ID']);
      // this.load_similar(this.post_data.catogery.categoryId);
      // console.log(this.post_data);
      this.one.one_data(val['ID']).then(data=>{
        // console.log(data.data);
        this.post_data = data.data;
        this.post_data.view = this.post_data.view +1;
        this.one.update_Data(val['ID'],this.post_data);
        this.one.load_similar(this.post_data.catogory.categoryId).then(data=>{
          // console.log(data);
          this.similar_post =data;
        });
        
      })
      
    });
    // this.load_similar(this.category_Id);
    
  }

  // async load(id: string) {
  //   try {
  //     const post = await this.one.one_data(id);
  //     this.post_data = post.data;
  //     // console.log(this.post_data);
  //     this.category_Id = this.post_data.catogory.categoryId;
  //     // console.log(this.category_Id);
      
      
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     // Display an error message to the user
  //   }
  // }
  // async load_similar(id:string){
   
  //   try {
  //     console.log('inside this is me ',id);
      
  //     const post = await this.one.load_similar(id);
  //     // const post = await this.one.loadCategotyPost(id);
      
  //     console.log(post);
  //   } catch (error) {
  //     console.log(error);
      
  //   }
    
    
    
  // }
}
