import { LancametoService } from './../lancameto.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lacamentos-pesquisa',
  templateUrl: './lacamentos-pesquisa.component.html',
  styleUrls: ['./lacamentos-pesquisa.component.css']
})
export class LacamentosPesquisaComponent implements OnInit  {
  descricao: string;
  lancamentos = [

  ];

  constructor(private lancamentoService: LancametoService ) { }

  ngOnInit() {    
    this.pesquisar();
  }

  pesquisar(){
    this.lancamentoService.pesquisar({ descricao: this.descricao })
    .then(lancamentos => this.lancamentos = lancamentos);
  }
}
