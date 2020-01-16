import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class TurmaService {

    url = 'http://localhost:8888/api/v1/turmas';
  
    constructor(private http: HttpClient) { }
  
    criar(body: string) {
      return this.http.post(this.url, body);
    }
  
  }