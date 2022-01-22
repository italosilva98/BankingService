import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css'],
})
export class LoginClienteComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  buscar() {
    this.router.navigateByUrl('/listar-contas')
  }
}
