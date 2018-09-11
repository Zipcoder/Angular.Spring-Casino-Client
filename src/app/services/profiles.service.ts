import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesService {
  private http: HttpClient;
  private apiUri = '';

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getAvailableProfiles(): Observable<any> {
    // Replace with your endpoint
    return this.http.get(this.apiUri + '/assets/profiles.json');
  }

  public selectProfiles(game, selectedProfiles): Observable<any> {
    return this.http.post(this.apiUri + '/assets/profiles.json', selectedProfiles);
  }
}
