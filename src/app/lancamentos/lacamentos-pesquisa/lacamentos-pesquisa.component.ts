import { LancametoService, LancamentoFiltro } from './../lancameto.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lacamentos-pesquisa',
  templateUrl: './lacamentos-pesquisa.component.html',
  styleUrls: ['./lacamentos-pesquisa.component.css']
})
export class LacamentosPesquisaComponent implements OnInit  {
  
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  descricao: string;
  lancamentos = [

  ];

  constructor(private lancamentoService: LancametoService ) { }

  ngOnInit() {    
    this.pesquisar();
  }

  pesquisar(){

    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    };

    this.lancamentoService.pesquisar(filtro)
    .then(lancamentos => this.lancamentos = lancamentos);
  }
}
