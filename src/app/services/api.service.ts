import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  get<T>(apiUrl:string,options?: any): Observable<T>{
    return this.http.get<T>(apiUrl);
  }

  post<T>(apiUrl:string, data:any, options?: any): Observable<T>{
    return this.http.post<T>(apiUrl, data,
      {headers: new  HttpHeaders({ 
        'Content-Type': 'application/json;charset=UTF-8'})
    });
  }
  // todo put, delete and other vrbs
}
