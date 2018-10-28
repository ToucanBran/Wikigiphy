import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../../services/wikipedia.service';
import { Observable } from 'rxjs';
import { SearchResult } from '../../models/search-result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchText: string;
  searchResults$: Observable<SearchResult[]>;
  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
  }

  search() {
    this.searchResults$ = this.wikipediaService.search(this.searchText);
  }
}
