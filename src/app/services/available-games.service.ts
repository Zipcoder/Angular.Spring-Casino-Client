import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AvailableGamesService {
  private http: HttpClient;
  private apiUri = ''; // replace with your URI (I.E. Localhost:8080)

  constructor(http: HttpClient) {
    this.http = http;
  }

  // Grabs an array of games available to play
  public getAvailableGames(): Observable<any> {
    // Replace with your endpoint
    return this.http.get(this.apiUri + '/assets/availableGames.json');
  }

  // Selects a game to start
  public selectGame(selectedGame): Observable<any> {
    // Replace with your endpoint
    return this.http.post(this.apiUri + '/sampleendpoint', selectedGame);
  }
}
