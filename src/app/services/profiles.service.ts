import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProfilesService {
  private http: HttpClient;
  private apiUri = 'http://localhost:8083'; // replace with your URI (I.E. Localhost:8080)

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getAvailableProfiles(): Observable<any> {
    return this.http.get(this.apiUri + '/casino/profile');
  }
}
