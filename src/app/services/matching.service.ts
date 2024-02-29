import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';
import { Match } from '../models/match.model';
import { MATCH_BY_ID_URL } from '../Shared/Urls';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {

  constructor(private http: HttpClient) { }

 getMatchById(MatchId: string): Observable<Article[]> {
    return this.http.get<Article[]>( MATCH_BY_ID_URL + MatchId);
  }

}
