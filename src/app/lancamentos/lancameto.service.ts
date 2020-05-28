import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable,} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from 'src/app/authentications/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LancametoService  {
  lancamentosUrl = "http://localhost:8080/lancamentos"; 
  
  constructor(private http:  HttpClient,
              private autenticacao: AuthenticationService) { }
 
  
              
  pesquisar(filtro: any): Promise<any> {    
    const headers = new HttpHeaders().append('Authorization', 'Basic bWFyY2lvQG10bW9uZXkuY29tOjEyMw==');
    let params = new HttpParams();
    
    if(filtro.descricao){
      params = params.set('descricao', filtro.descricao);
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, {headers: headers, params})
     .toPromise()
     .then(response => response['content']);
  } 
}
