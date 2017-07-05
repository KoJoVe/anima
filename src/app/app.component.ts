import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

declare var firebase;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var config = {
        apiKey: "AIzaSyDe5alIlW1UJyL7iTuR0WMRMDg4zWdP8pQ",
        authDomain: "anima-343bb.firebaseapp.com",
        databaseURL: "https://anima-343bb.firebaseio.com",
        projectId: "anima-343bb",
        storageBucket: "anima-343bb.appspot.com",
        messagingSenderId: "944406298860"
      };
      firebase.initializeApp(config);
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
