import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable,} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import * as moment from 'moment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 3;
}

@Injectable({
  providedIn: 'root'
})
export class LancametoService  {
  lancamentosUrl = "http://localhost:8080/lancamentos"; 
  
  constructor(private http:  HttpClient) { }
 
  
              
  pesquisar(filtro: any): Promise<any> {    
    const headers = new HttpHeaders().append('Authorization', 'Basic bWFyY2lvQG10bW9uZXkuY29tOjEyMw==');
    let params = new HttpParams();
    
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if(filtro.descricao){
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }
  
    if (filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, {headers: headers, params})
     .toPromise()
     .then(response => {
      const lancamentos = response['content']
      const resultado = {
      lancamentos,
      total: response['totalElements']
      }
        return resultado; 
     });
  } 
}
