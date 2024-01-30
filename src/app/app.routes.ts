import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SingleCategoryComponent } from './pages/single-category/single-category.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { TermsAndConditionComponent } from './pages/terms-and-condition/terms-and-condition.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'category/:category/:id',
        component:SingleCategoryComponent
    },
    {
        path: 'post/:ID',
        component: SinglePostComponent
    },
    {
        path:'term-conditions',
        component:TermsAndConditionComponent
    },
    {
        path: 'contact-us',
        component:ContactUsComponent
    },
    {
        path:'about',
        component: AboutUsComponent
    }

];
