import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result';
import { SearchHistoryService } from './search-history.service';
@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  WIKI_API = 'https://en.wikipedia.org/w/api.php?action=query&generator=prefixsearch' +
    '&prop=info&inprop=url&origin=*&format=json&gpssearch=';

  constructor(private http: HttpClient,
    private searchHistoryService: SearchHistoryService) { }

  search(searchText: string): Observable<SearchResult[]> {
    return this.http.get(`${this.WIKI_API}${searchText}`).pipe(
      map(res => {
        if (res['query']) {
        const pagesInfo = res['query']['pages'];
        return Object.keys(pagesInfo)
          .map(key => new SearchResult(pagesInfo[key]['title'], pagesInfo[key]['fullurl'], 'wikipedia'));
        }
        else {
          return [];
        }
      })
    );
  }
}
