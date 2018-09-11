import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesService {
  private http: HttpClient;
  private apiUri = ''; // replace with your URI (I.E. Localhost:8080)

  constructor(http: HttpClient) {
    this.http = http;
  }

  // gets an of all the available profiles
  public getAvailableProfiles(): Observable<any> {
    // Replace with your endpoint
    return this.http.get(this.apiUri + '/assets/profiles.json');
  }

  // selects profiles to be used as players for a particular game
  // Should return back the updated game, which should now include the players
  public selectProfiles(game, selectedProfiles): Observable<any> {
    return this.http.post(this.apiUri + '/sampleendpoint', selectedProfiles);
  }
}
