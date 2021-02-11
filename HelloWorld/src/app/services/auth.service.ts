/*
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;
  userData: any;
  userEmail: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private firebaseAuth: AngularFireAuth, public router: Router) {
    this.user = firebaseAuth.authState;
    this.firebaseAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Access granted.');
        this.router.navigate(['admin']);
      })
      .catch(err => {
        console.log('Invalid email or password', err.message);
        alert('Invalid email or password.');
        this.router.navigate(['login']);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

   Checks if the user is logged in.
  getLoggedInUser(): any {
    return this.firebaseAuth.authState;
  }

   Another way to check if the user is logged in.
    get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null);
  }


  isLoggedIn() {
    if (this.userEmail == null) {
      return false;
    } else {
      return this.userEmail;
    }
  }
}
*/
