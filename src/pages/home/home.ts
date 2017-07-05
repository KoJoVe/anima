import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';

import { RegisterPage } from '../register/register'
import { MainPage } from '../main/main'

declare var firebase;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: any = {};

  constructor(public platform: Platform, public navCtrl: NavController, public alertCtrl: AlertController, public usersProvider: UsersProvider) {}

  goToMain() {
    this.navCtrl.push(MainPage);
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  login() {
    this.usersProvider.login(this.user).then((response) => {
      this.goToMain();
    }, (error) => {
      let alert = this.alertCtrl.create({
        title: 'Erro',
        message: error,
        buttons: [{text: 'Ok',role: 'cancel', handler: () => {}}]
      });
      alert.present();
    });
  }

  ionViewDidEnter() {
    this.platform.ready().then(() => {
      var user = firebase.auth().currentUser;
      if (user != null) {
        this.goToMain();
      }
    });
  }

}
