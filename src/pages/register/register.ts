import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { UsersProvider } from '../../providers/users/users';

declare var firebase;

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user: any = {};
  confirmation: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersProvider: UsersProvider, public alertCtrl: AlertController) {

      var user = firebase.auth().currentUser;
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad RegisterPage');
  }

  register() {

    if(this.user.password != this.confirmation) {
      let alert = this.alertCtrl.create({
        title: 'Senhas não combinam',
        message: 'As duas senhas digitadas não são iguais!',
        buttons: [{text: 'Ok',role: 'cancel',handler: () => {}}]
      });
      alert.present();
      return;
    }

    this.usersProvider.createUser(this.user).then((response) => {
      let alert = this.alertCtrl.create({
        title: 'Oba!',
        message: 'Usuário criado com sucesso!',
        buttons: [{text: 'Ok',role: 'cancel', handler: () => {
          this.navCtrl.pop();
        }}]
      });
      alert.present();
    }, (error) => {
      let alert = this.alertCtrl.create({
        title: 'Erro',
        message: error,
        buttons: [{text: 'Ok',role: 'cancel', handler: () => {}}]
      });
      alert.present();
    });

  }

  back() {
    this.navCtrl.pop();
  }

}
