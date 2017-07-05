import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  storySelected = -1;

  stories = [
    {
      name: "José",
      story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla Blabalba lablab labalba labl ablab alabablaba lbal balabla",
      distance: 40,
    },
    {
      name: "José",
      story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
      distance: 40,
    },
    {
      name: "José",
      story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
      distance: 40,
    },
    {
      name: "José",
      story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
      distance: 40,
    },
    {
      name: "José",
      story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
      distance: 40,
    },
    {
      name: "José",
      story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
      distance: 40,
    },
    {
      name: "José",
      story: "Blabalba lablab labalba labl ablab alabablaba lbal balabla",
      distance: 40,
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad HistoryPage');
  }

  cutString(str) {
    return str.substring(0, 180);
  }

  back() {
    this.navCtrl.pop();
  }

  openStory(i) {
    this.storySelected = i;
  }

  deleteStory(i) {
    let alert = this.alertCtrl.create({
      title: 'Deletar História',
      message: 'Tem certeza de que quer deletar esta história?',
      buttons: [
        {
          text: 'Deletar',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
