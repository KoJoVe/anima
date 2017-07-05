import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';

import { HistoryPage } from '../history/history'

declare var firebase;

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersProvider: UsersProvider, public alertCtrl: AlertController) {
    this.user = firebase.auth().currentUser;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProfilePage');
  }

  goToStories() {
    this.navCtrl.push(HistoryPage);
  }

  back() {
    this.navCtrl.pop();
  }

  quit() {
    this.usersProvider.logout().then(() => {
      this.navCtrl.popTo(this.navCtrl.getByIndex(0));
    }, (error) => {
      let alert = this.alertCtrl.create({
        title: 'Erro',
        message: error,
        buttons: [{text: 'Ok',role: 'cancel',handler: () => {}}]
      });
      alert.present();
      return;
    });
  }

}
