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
          var usersDistance = snapshot.val();
          var user = firebase.auth().currentUser;
          user = usersDistance[user.uid];
          for (var key in usersDistance) {
            var dist = Math.sqrt( Math.pow(user.lat - usersDistance[key].lat, 2) + Math.pow(user.lon - usersDistance[key].lon, 2));
            if (dist < 50) {
              firebase.database().ref('/stories/' + usersDistance[key].uid + '/').once('value').then( (snapshot) => {
                var userStories = snapshot.val();
                if (userStories != null) {
                  for (var i in userStories) {
                    stories.push({ id:userStories[i].sid , author:userStories[i].author, story:userStories[i].story, distance: dist });
                  }
                }
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

  getCurrentUserStories(): Promise<{}> {
    return new Promise((resolve, reject) => {
      var user = firebase.auth().currentUser;
      firebase.database().ref('/stories/' + user.uid + '/').once('value').then( (snapshot) => {
        var stories = [];
        var userStories = snapshot.val();
        if (userStories != null) {
          for (var i in userStories) {
            stories.push({ id:userStories[i].sid , author:userStories[i].author, story:userStories[i].story});
          }
        }
        resolve(stories);
      }, (error) => {
        reject(error.message);
      });
    });
  }

  deleteStory(story): Promise<{}> {
    return new Promise((resolve, reject) => {

	  });
  }

}
