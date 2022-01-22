import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-contas',
  templateUrl: './listar-contas.component.html',
  styleUrls: ['./listar-contas.component.css']
})
export class ListarContasComponent implements OnInit {


  contas = [
    {
      nome: "Antonio Coutinho",
      agencia: "1500",
      conta: "052012",
      tipoConta: "Conta Corrente Uniclass"
    },
    {
      nome: "Antonio Coutinho2",
      agencia: "1500",
      conta: "052012",
      tipoConta: "Conta Corrente Uniclass"
    },
    {
      nome: "Antonio Coutinho3",
      agencia: "1500",
      conta: "052012",
      tipoConta: "Conta Corrente Uniclass"
    }
  ]

  constructor(private router: Router) {}

  ngOnInit() {}

  buscar() {
    this.router.navigateByUrl('/detalhar-cliente')
  }

}
