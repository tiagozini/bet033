import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorFutebolComponent } from './jogador-futebol.component';

describe('JogadorFutebolComponent', () => {
  let component: JogadorFutebolComponent;
  let fixture: ComponentFixture<JogadorFutebolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogadorFutebolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogadorFutebolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
