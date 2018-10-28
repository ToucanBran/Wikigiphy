import { Injectable } from '@angular/core';
import { SearchHistoryService } from './search-history.service';
import { WikipediaService } from './wikipedia.service';
import { GiphyService } from './giphy.service';
import { mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-result';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private searchHistoryService: SearchHistoryService,
              private wikipediaService: WikipediaService,
              private giphyService: GiphyService) { }

  searchWikiGiphy(searchText: string): Observable<SearchResult[]> {
    this.searchHistoryService.addToHistory(searchText);
    return this.giphyService.search(searchText).pipe(
      mergeMap(
        _ => this.wikipediaService.search(searchText),
        (giphySearchResults, wikiSearchResults) => {
          return [...giphySearchResults, ...wikiSearchResults];
        })
    );
  }
}
