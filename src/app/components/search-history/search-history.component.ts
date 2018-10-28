import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../../models/search';
import { SearchHistoryService } from '../../services/search-history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {

  searchHistory$: Observable<Search[]>;
  constructor(private searchHistoryService: SearchHistoryService) { }

  ngOnInit() {
    this.searchHistory$ = this.searchHistoryService.searchHistory$;
  }
}
