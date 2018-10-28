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
  WIKI_API = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=prefixsearch&pssearch=';

  constructor(private http: HttpClient,
              private searchHistoryService: SearchHistoryService) { }

  search(searchText: string): Observable<SearchResult[]> {
    this.searchHistoryService.addToHistory(searchText);
    return this.http.get(`${this.WIKI_API}${searchText}`).pipe(
      map(res =>  res['query']['prefixsearch'] ));
  }
}
