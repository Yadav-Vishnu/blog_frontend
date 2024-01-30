import { Injectable } from '@angular/core';
import { Firestore, collection, doc, getDoc, getDocs, limit, orderBy, query, updateDoc, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore:Firestore) { }

  async loadData() {
    // Add a condition to the query
    const q = query(collection(this.firestore, 'post'), where('isFeatured', '==', true),limit(4));
    const querySnapshot = await getDocs(q);
    const post = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return post;
  }

  async load_Latest_Data() {
    // Add a condition to the query
    const q = query(collection(this.firestore, 'post'), orderBy('created'));
    const querySnapshot = await getDocs(q);
    const post = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return post;
  }

 async loadCategotyPost(categoryId:string){
  const q = query(collection(this.firestore, 'post'), where('catogory.categoryId', '==', categoryId),limit(4));
  const querySnapshot = await getDocs(q);
  const post = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  return post;
 }


 async one_data(id: string) {
  try {
    const docRef = doc(this.firestore, 'post', id);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, data: docSnap.data() };
  } catch (e) {
    throw new Error('No such document!');
  }
}

async load_similar(catId:string){
  const q = query(collection(this.firestore, 'post'), where('catogory.categoryId', '==', catId),limit(4));
  const querySnapshot = await getDocs(q);
  const post = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    data: doc.data(),
  }));
  return post;
 }

 async update_Data(id: string, postData: any) {
  try {
    const docRef = doc(this.firestore, 'post', id);
    await updateDoc(docRef, postData);
    // console.log('Document updated with ID: ', id);
  } catch (e) {
    console.error('Error updating document: ', e);
  }
}
}
