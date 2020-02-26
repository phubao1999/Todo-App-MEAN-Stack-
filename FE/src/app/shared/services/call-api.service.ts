import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as config } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor(private http: HttpClient) { }

  // configUrl = 'http://localhost:3000/list';
  // userUrl = 'http://localhost:3000/users';
  apiLink = config.hostServer;

  getData() {
    return this.http.get(`${this.apiLink}/list`);
  }

  postData(body) {
    return this.http.post(`${this.apiLink}/list`, body);
  }

  deleteData(id) {
    return this.http.delete(`${this.apiLink}/list/${id}`);
  }

  getDetail(id) {
    return this.http.get(`${this.apiLink}/list/${id}`);
  }

  editData(id, body) {
    return this.http.put(`${this.apiLink}/list/${id}`, body);
  }

  register(body) {
    return this.http.post(`${this.apiLink}/users/register`, body);
  }

  login(body) {
    return this.http.post(`${this.apiLink}/login`, body);
  }
}
