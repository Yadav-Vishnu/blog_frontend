import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  firestore:Firestore  = inject(Firestore);

  async loadData(){
    const q = query(collection(this.firestore, 'categories'));
    const querySnapshot = await getDocs(q);
    const categories = querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    }));
    return categories;
  }
  
}
