import { Injectable, inject } from '@angular/core';
import { Sub } from '../modules/sub';
import { Firestore, addDoc, collection, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {
  firestore: Firestore = inject(Firestore);
  constructor() { }
  async saveData(postData: Sub) {
    try {
      // console.log("HI kaustubh",this.firestore);
      const docRef = await addDoc(collection(this.firestore, 'subscribers'), postData);
      // console.log('New subscriber added with ID: ', docRef.id);
    } catch (e) {
      // console.error('Error adding document: ', e);
    }
  }
  async isRegistered(email: string): Promise<boolean> {
    try {
      const snapshot = await getDocs(query(collection(this.firestore, 'subscribers'), where('email', '==', email)));
      // Directly check the snapshot's size for efficiency
      return snapshot.size > 0;
    } catch (error) {
      // console.error('Error checking email registration:', error);
      throw error; // Re-throw to allow handling at a higher level
    }
  }

}
