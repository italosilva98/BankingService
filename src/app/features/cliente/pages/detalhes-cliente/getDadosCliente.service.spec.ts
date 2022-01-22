/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetDadosClienteService } from './getDadosCliente.service';

describe('Service: GetDadosCliente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDadosClienteService]
    });
  });

  it('should ...', inject([GetDadosClienteService], (service: GetDadosClienteService) => {
    expect(service).toBeTruthy();
  }));
});
