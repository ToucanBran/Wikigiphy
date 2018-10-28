import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SearchHistoryService } from './search-history.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  GIPHY_SEARCH_API = `https://api.giphy.com/v1/gifs/search?api_key=${environment.giphyKey}&limit=1&offset=0&rating=G&lang=en&q=`;
  constructor(private searchHistoryService: SearchHistoryService,
    private http: HttpClient) { }

  search(searchText: string): Observable<SearchResult[]> {
    return this.http.get(`${this.GIPHY_SEARCH_API}${searchText}`).pipe(
      map(res => {
        return res['data'].map(giphy => {
          const imgUrl = giphy['images']['original']['url'];
          return new SearchResult(searchText, imgUrl, 'giphy');
        });
      }));
  }
}
