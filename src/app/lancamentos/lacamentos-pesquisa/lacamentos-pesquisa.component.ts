import { Component, OnInit } from '@angular/core';

import { LancametoService, LancamentoFiltro } from './../lancameto.service';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';


@Component({
  selector: 'app-lacamentos-pesquisa',
  templateUrl: './lacamentos-pesquisa.component.html',
  styleUrls: ['./lacamentos-pesquisa.component.css']
})
export class LacamentosPesquisaComponent implements OnInit  {
  totalRegistros = 0;
  filtro = new LancamentoFiltro();
  lancamentos = [

  ];

  constructor(private lancamentoService: LancametoService ) { }

  ngOnInit() {    
    this.pesquisar();
  }

  pesquisar(pagina = 0){   
    this.filtro.pagina = pagina;

    this.lancamentoService.pesquisar(this.filtro)
    .then(resultado => {
      this.totalRegistros = resultado.total;
      this.lancamentos = resultado.lancamentos});
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }
}
