import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Search } from '../models/search';
@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
// TODO: Implement firabase search history
  // private _searchHistoryKey = new BehaviorSubject<string>(null);
  // searchHistoryKey$ = this._searchHistoryKey.asObservable();
  // searchHistoryRef: any;
  private _searchHistory = new BehaviorSubject<Search[]>([]);
  searchHistory$ = this._searchHistory.asObservable();
  constructor() {
   }


  addToHistory(query: string) {
    const currentHistory = [...this._searchHistory.value];
    const time = Math.floor((new Date()).getTime() / 1000);
    currentHistory.push(new Search(query, time));
    this._searchHistory.next(currentHistory);
  }
}
