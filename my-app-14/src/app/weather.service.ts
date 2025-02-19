import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://localhost:44329/api/weather';

  constructor(private http: HttpClient) {}

  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
