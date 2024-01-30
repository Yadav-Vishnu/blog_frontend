import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent implements OnInit {


  constructor() {}
  @Input() post_data: any;
 
  ngOnInit() {
    
    // console.log(this.post_data); // Now it should have a value
    // console.log(this.latest); // Now it should have a value
  }
}
