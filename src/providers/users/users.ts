import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var firebase;

@Injectable()
export class UsersProvider {

  constructor(public http: Http) {
    // console.log('Hello UsersProvider Provider');
  }

  getUsers(): Promise<{}> {
    return new Promise((resolve, reject) => {

    });
  }

  getUser(): Promise<{}> {
    return new Promise((resolve, reject) => {

    });
  }

  login(data): Promise<{}> {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error.message);
      });
    });
  }

  logout(): Promise<{}> {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(() => {
        resolve("ok");
      }, (error) => {
        reject(error.message);
      });
    });
  }

  createUser(data): Promise<{}> {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((response) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({displayName: data.displayName}).then((response) => {
          var userdata = { uid: user.uid, lat: 0, lon: 0, };
          var updates = {};
          updates['/users/' + user.uid] = userdata;
          firebase.database().ref().update(updates).then((response) => {
            resolve(response);
          }, (error) => {
            reject(error.message);
          });
        }, (error) => {
          reject(error.message);
        });
      }, (error) => {
        reject(error.message);
      });
    });
  }

  updateUser(): Promise<{}> {
    return new Promise((resolve, reject) => {

    });
  }

  updateLocaion(): Promise<{}> {
    return new Promise((resolve, reject) => {

    });
  }

}
