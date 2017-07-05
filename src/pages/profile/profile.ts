import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HistoryPage } from '../history/history'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    this.navCtrl.popTo(this.navCtrl.getByIndex(0));
  }

}
