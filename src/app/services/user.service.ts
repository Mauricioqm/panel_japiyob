import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor
  (
    private angularFireDatabase: AngularFireDatabase,
  ) { }

  obtenerUsuarios() {
    return this.angularFireDatabase.list('/users');
  }

  obtenerSocios() {
    return this.angularFireDatabase.list('/socios');
  }

  getUserById(uid) {
    return this.angularFireDatabase.object('/users/' + uid);
  }

  getSocioById(uid) {
    return this.angularFireDatabase.object('/socios/' + uid);
  }

  createUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }
  editUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }

  createPub(publicidad, nombre) {
    return this.angularFireDatabase.object('/publicidad/' + nombre).set(publicidad);
  }
}
