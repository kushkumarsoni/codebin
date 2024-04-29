import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { snippetType } from '../models/Snippet';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private db?:any

  constructor(private authService:AuthService,private router:Router) {
    this.db = getFirestore()
  }

  //create snippets
  async createCodeSnippet(snippet:snippetType) {
    try {
      const docRef = await addDoc(collection(this.db, "snippets"),{
        ...snippet,
        by:this.authService.getUid()
      });
      console.log("Code snippet is created ID: ", docRef.id);
      alert('Snippets is successfully created.');
      this.router.navigate([''])
    } catch (e) {
      console.error("Error adding document: ", e);
      // alert('Something went wrong.');
    }

  }

  //get all data
  async getAllCodeSnippets() {
    try{
      let results:any = []
      const querySnapshot = await getDocs(collection(this.db, "snippets"));
      querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data()}`);
        results.push({id:doc.id,...doc.data()})
      });
      return results;
    } catch (e) {
      console.error("Something went wrongt: ", e);
    }
  }

  //get a snipped by id
  async getSnippetById(docId:string) {
    let result:any = []
    try{
      const docRef = doc(this.db, "snippets", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        result = docSnap.data()
        return result;
      } else {
        console.log("No such document!");
      }
    }catch(e){
      console.log("Something went wrong :",e)
    }
  }




}
