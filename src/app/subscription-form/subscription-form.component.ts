import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sub } from '../modules/sub';
import { SubscriberService } from '../services/subscriber.service';
@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.css'
})
export class SubscriptionFormComponent implements OnInit{
  val!:boolean;
  sucessfully:boolean =false;
  constructor(private subService:SubscriberService) {
    
  }

  ngOnInit(): void {
    
    
  }

async onsubmit(subForm:any) {
// console.log(value);
const data:Sub = subForm.value;
  this.val =await this.subService.isRegistered(data.email);
// console.log(this.val);
  if(!this.val){
    this.subService.saveData(data);
    this.sucessfully = true;
    subForm.reset();
  }else{
    throw new Error("This email is already exist");
  }
}

}
