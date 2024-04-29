import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uid?:string

  constructor(private router:Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid;
        console.log('Loggedin user as ',user.email)
      } else {
        this.uid=undefined
        console.log('user logout')
      }
    });
  }


  isAuthenticated() {
    return (this.uid != undefined) ? true : false;
  }

  getUid() {
    return this.uid;
  }

  registerUser(email:string,password:string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log('User :',user);
        alert("User created successfully!");
        this.router.navigate(['/'])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error :',errorMessage);
        // ..
    });
  }

  loginUser(email:string,password:string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user :',user);
        this.router.navigate(['/'])
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('error :',errorMessage);
    });
  }


  logoutUser(){
    if(confirm('Are you sure want to logout?')) {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.router.navigate(['/login'])
      }).catch((error) => {
        console.log('Error :',error)
      });
    }
    return false;
  }
}
