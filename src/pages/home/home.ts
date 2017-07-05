import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register'
import { MainPage } from '../main/main'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToMain() {
    this.navCtrl.push(MainPage);
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
