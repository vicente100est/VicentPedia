import { Component } from '@angular/core';
import { SearchService, Article } from './pages/search/services/search.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  articles$ !: Observable<Article[]>

  constructor(private readonly searchSvc: SearchService){ }

  onSearch(term: string): void{
    this.articles$ = this.searchSvc.search(term)
  }
}
