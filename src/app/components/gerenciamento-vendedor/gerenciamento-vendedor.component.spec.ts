import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciamentoVendedorComponent } from './gerenciamento-vendedor.component';

describe('GerenciamentoVendedorComponent', () => {
  let component: GerenciamentoVendedorComponent;
  let fixture: ComponentFixture<GerenciamentoVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciamentoVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciamentoVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
