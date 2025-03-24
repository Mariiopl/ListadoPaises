import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePadreComponent } from './mensaje-padre.component';

describe('MensajePadreComponent', () => {
  let component: MensajePadreComponent;
  let fixture: ComponentFixture<MensajePadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajePadreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajePadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
