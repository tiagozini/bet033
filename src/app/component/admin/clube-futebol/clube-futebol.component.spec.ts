import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubeFutebolComponent } from './clube-futebol.component';

describe('ClubeFutebolComponent', () => {
  let component: ClubeFutebolComponent;
  let fixture: ComponentFixture<ClubeFutebolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubeFutebolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubeFutebolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
