import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private baseUrl = 'https://free-to-play-games-database.p.rapidapi.com/api';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': 'Your-RapidAPI-Key',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  });

  http = inject(HttpClient);

  getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/games`, { headers: this.headers });
  }

  getGamesByFilters(category?: string, platform?: string, sort?: string): Observable<Game[]> {
    let url = `${this.baseUrl}/games`;

    const params: string[] = [];
    if (category) params.push(`category=${category.toLowerCase()}`);
    if (platform) params.push(`platform=${platform.toLowerCase()}`);
    if (sort) params.push(`sort-by=${sort.toLowerCase()}`);
    if (params.length > 0) {
      url += `?${params.join('&')}`;
    }

    return this.http.get<Game[]>(url, { headers: this.headers });
  }



  getGameDetails(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/game?id=${id}`, { headers: this.headers });
  }

  constructor() {}
}
