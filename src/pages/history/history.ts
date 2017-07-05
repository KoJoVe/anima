import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { StoriesProvider } from '../../providers/stories/stories';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  storySelected = -1;

  stories = []

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public storiesProvider: StoriesProvider) {
    storiesProvider.getCurrentUserStories().then( (response : any[]) => {
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
