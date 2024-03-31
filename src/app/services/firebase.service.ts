import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { getAuth, updateProfile } from 'firebase/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  //=========== Autenticación ==============

  login (user: User) {
    return this.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signUp (user: User) {
    return this.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  updateUser (user: any) {
    const auth = getAuth();
    return updateProfile(auth.currentUser, user);
  }
}
