import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetDadosClienteService } from '../../pages/detalhes-cliente/getDadosCliente.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DadosPessoaisComponent implements OnInit {
  dadosPessoais!: FormGroup;
  backupForm!: FormGroup;
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
    this.dadosPessoais = this.fb.group({
      nome: this.dadosService.getDadosPessoais().nome,
      cpf: this.dadosService.getDadosPessoais().cpf,
      nascimento: this.dadosService.getDadosPessoais().nascimento,
      rg: this.dadosService.getDadosPessoais().rg,
      sexo: this.dadosService.getDadosPessoais().sexo,
      profissao: this.dadosService.getDadosPessoais().profissao,
      pai: this.dadosService.getDadosPessoais().pai,
      mae: this.dadosService.getDadosPessoais().mae,
    });
  }
}
