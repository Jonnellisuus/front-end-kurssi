import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, public router: Router) {
    this.user = firebaseAuth.authState;
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
        this.router.navigate(['login']);
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }
}
