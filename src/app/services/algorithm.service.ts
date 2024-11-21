import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {
  private apiUrl = 'http://localhost:8080/api'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  useAlgorithm(str: string): Observable<string> {
    return this.http.get<any>(this.apiUrl + `/use_algorithm?str=${str}`);
  }
}
