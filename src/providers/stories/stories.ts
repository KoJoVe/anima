import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var firebase;

@Injectable()
export class StoriesProvider {

  constructor(public http: Http) {
    //console.log('Hello StoriesProvider Provider');
  }

  createStory(storyContent): Promise<{}> {
    return new Promise((resolve, reject) => {
      var user = firebase.auth().currentUser;
      var storyId = firebase.database().ref().child('stories/' + user.uid).push().key;
      var storyData = { sid : storyId, authorid: user.uid, author: user.displayName, story: storyContent  };
      var updates = {};
      updates['/stories/' + user.uid + '/' + storyId] = storyData;
      firebase.database().ref().update(updates).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error.message);
      });
	  });
  }

  getStories(): Promise<{}> {
    return new Promise((resolve, reject) => {
      firebase.database().ref('/users/').once('value').then( (snapshot) => {
          var stories = [];
          var user = firebase.auth().currentUser;
          var usersDistance = snapshot.val();
          for (var key in usersDistance)
          {
            var dist = Math.sqrt( Math.pow(user.lat - usersDistance[key].lat, 2) + Math.pow(user.lon - usersDistance[key].lon, 2));
            if (dist < 50)
            {
              firebase.database().ref('/stories/' + usersDistance[key].uid).once('value').then( (snapshot) => {
                stories.push({ id:snapshot.val().sid , name:snapshot.val().author, story:snapshot.val().story, distance: dist });
              }, (error) => {
                reject(error.message);
              });
            }
          }
          resolve(stories);
        } , (error) => {
          reject(error.message);
        });
	  });
  }

  deleteStory(story): Promise<{}> {
    return new Promise((resolve, reject) => {

	  });
  }

}
