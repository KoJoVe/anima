import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { StoriesProvider } from '../../providers/stories/stories';

import { ProfilePage } from '../profile/profile'
import { NewPage } from '../new/new'

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  storySelected = -1;
  stories = [];
  // stories = [
  //   {
  //     name: "José",
  //     story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla",
  //     distance: 40,
  //   },
  //   {
  //     name: "José",
  //     story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
  //     distance: 40,
  //   },
  //   {
  //     name: "José",
  //     story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
  //     distance: 40,
  //   },
  //   {
  //     name: "José",
  //     story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
  //     distance: 40,
  //   },
  //   {
  //     name: "José",
  //     story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
  //     distance: 40,
  //   },
  //   {
  //     name: "José",
  //     story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
  //     distance: 40,
  //   },
  //   {
  //     name: "José",
  //     story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
  //     distance: 40,
  //   }
  // ]

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public storiesProvider: StoriesProvider) {
    storiesProvider.getStories().then( (response : any[]) => {
      this.stories = response;
    } , (error) => {
      let alert = this.alertCtrl.create({
        title: 'Erro',
        message: error,
        buttons: [{text: 'Ok',role: 'cancel', handler: () => {}}]
      });
      alert.present();
    });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MainPage');
  }

  cutString(str) {
    return str.substring(0, 110);
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  goToNew() {
    this.navCtrl.push(NewPage);
  }

  openStory(i) {
    this.storySelected = i;
  }

}
