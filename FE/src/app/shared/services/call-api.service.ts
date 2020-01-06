import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:3000/list';

  getData() {
    return this.http.get(this.configUrl);
  }
}
