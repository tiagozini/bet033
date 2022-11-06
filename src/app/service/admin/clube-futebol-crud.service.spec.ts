import { TestBed } from '@angular/core/testing';

import { ClubeFutebolCludService } from './clube-futebol-crud.service';

describe('ClubeFutebolCludService', () => {
  let service: ClubeFutebolCludService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClubeFutebolCludService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
