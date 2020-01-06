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

  postData(body) {
    return this.http.post(this.configUrl, body);
  }

  deleteData(id) {
    return this.http.delete(`${this.configUrl}/${id}`);
  }

  getDetail(id) {
    return this.http.get(`${this.configUrl}/${id}`);
  }
}
