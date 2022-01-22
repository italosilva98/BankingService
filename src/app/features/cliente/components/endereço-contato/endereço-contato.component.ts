import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetDadosClienteService } from '../../pages/detalhes-cliente/getDadosCliente.service';

@Component({
  selector: 'app-endereco-contato',
  templateUrl: './endereço-contato.component.html',
  styleUrls: ['./endereço-contato.component.css'],
})
export class EnderecoContatoComponent implements OnInit {

  enderecoContato!: FormGroup;
  readOnlyForm = true;

  constructor(
    private fb: FormBuilder,
    private dadosService: GetDadosClienteService
  ) {}

  ngOnInit() {
    this.getDados();
  }

  editar() {
    this.readOnlyForm = false;
  }

  cancelar() {
    this.getDados();
    this.readOnlyForm = true;
  }

  getDados() {
    this.enderecoContato = this.fb.group({
      logradouro: this.dadosService.getEnderecoContato().logradouro,
      numero: this.dadosService.getEnderecoContato().numero,
      complemento: this.dadosService.getEnderecoContato().complemento,
      bairro: this.dadosService.getEnderecoContato().bairro,
      cep: this.dadosService.getEnderecoContato().cep,
      cidade: this.dadosService.getEnderecoContato().cidade,
      estado: this.dadosService.getEnderecoContato().estado,
      email: this.dadosService.getEnderecoContato().email,
      telefone: this.dadosService.getEnderecoContato().telefone,
      celular: this.dadosService.getEnderecoContato().celular,
    });
  }
}
