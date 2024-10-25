import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesAPIComponent } from './detalles-api.component';

describe('DetallesAPIComponent', () => {
  let component: DetallesAPIComponent;
  let fixture: ComponentFixture<DetallesAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
