import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StoriesProvider {

  constructor(public http: Http) {
    //console.log('Hello StoriesProvider Provider');
  }

  createStory(story): Promise<{}> {
    return new Promise((resolve, reject) => {
      
	  });
  }

  deleteStory(story): Promise<{}> {
    return new Promise((resolve, reject) => {

	  });
  }

}
