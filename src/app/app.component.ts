import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryNavbarComponent } from './layout/category-navbar/category-navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PostCardComponent } from './layout/post-card/post-card.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,SubscriptionFormComponent,PostCardComponent,FooterComponent,CategoryNavbarComponent, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blogs_project';
}
