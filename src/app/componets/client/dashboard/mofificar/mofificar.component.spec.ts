import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MofificarComponent } from './mofificar.component';

describe('MofificarComponent', () => {
  let component: MofificarComponent;
  let fixture: ComponentFixture<MofificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MofificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MofificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
