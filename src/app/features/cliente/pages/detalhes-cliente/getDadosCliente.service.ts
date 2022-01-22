import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDadosClienteService {
  dadosPessoais = {
    nome: 'Qualquer Nome Moock',
    cpf: '000.000.00-00',
    nascimento: '10/10/1010',
    rg: '00.000.000-0',
    sexo: 'masculino',
    profissao: 'motorista',
    pai: 'Nome Pai',
    mae: 'Nome Mae',
  };

  enderecoContato = {
    logradouro: "Avenida Brasil",
    numero: "153",
    complemento: "apto 501",
    bairro: "Jardim brasil",
    cep: "00000-000",
    cidade: "São Paulo",
    estado: "SP",
    email: "email@email.com",
    telefone: "(55)9999-9999",
    celular: "(55)99999-9999"

  }
  constructor() {}

  getDadosPessoais(){
    return this.dadosPessoais
  }

  getEnderecoContato(){
    return this.enderecoContato
  }
}
