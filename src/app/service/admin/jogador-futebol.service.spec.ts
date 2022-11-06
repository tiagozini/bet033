import { TestBed } from '@angular/core/testing';

import { JogadorFutebolService } from './jogador-futebol.service';

describe('JogadorFutebolService', () => {
  let service: JogadorFutebolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogadorFutebolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
