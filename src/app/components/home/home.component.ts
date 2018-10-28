import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../../services/wikipedia.service';
import { Observable } from 'rxjs';
import { SearchResult } from '../../models/search-result';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: string;
  searchResults$: Observable<SearchResult[]>;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchResults$ = this.searchService.searchWikiGiphy(this.searchText);
  }
}
