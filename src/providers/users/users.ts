import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  login(): Promise<{}> {
    return new Promise((resolve, reject) => {

    });
  }

  createUser(): Promise<{}> {
    return new Promise((resolve, reject) => {

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
