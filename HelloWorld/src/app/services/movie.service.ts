import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {News} from '../cinema/news';
import {map} from 'rxjs/operators';
import {parseString} from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://www.finnkino.fi/xml/News/';
  }

  getData(): Observable<any> {
    return this.httpClient.get(this.url, {responseType: 'text'}).pipe(map(response => {
      let newsData: News [] = [];
      parseString(response, {
        trim: true,
        explicitArray: false,
        mergeAttrs: true
      }, function( err, result) {
        newsData = result.News.NewsArticle;
      });
      return newsData;
    }));
  }
}
