import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class LancametoService {
  lancamentosUrl = "http://localhost:8080/lancamentos";

  constructor(private http:  HttpClient) { }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.http.get(`${this.lancamentosUrl}?resumo`)
     .toPromise()
     .then(response => response['content']);
  }
}
