import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

import { StoriesProvider } from '../../providers/stories/stories'

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  storyContent : string = "";

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public storiesProvider : StoriesProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewPage');
  }

  back() {
    this.navCtrl.pop();
  }

  send() {
    this.storiesProvider.createStory(this.storyContent).then( () => {
      let alert = this.alertCtrl.create({
        title: '',
        message: 'Sua história foi criada com sucesso',
        buttons: [{text: 'Ok',role: 'cancel', handler: () => {
          this.navCtrl.pop();
        }}]
      });
      alert.present();
    } , (error) => {
      let alert = this.alertCtrl.create({
        title: 'Erro',
        message: error,
        buttons: [{text: 'Ok',role: 'cancel', handler: () => {}}]
      });
      alert.present();
    });
  }

}
