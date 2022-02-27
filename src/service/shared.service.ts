import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpClient: HttpClient) {}

  get(path: any): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/${path}`);
  }
  
  post(path: any, data: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/${path}`, data);
  }

  delete(path: any): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/${path}`);
  }

  update(path: any, data: any): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}/${path}`, data);
  }
  
}
