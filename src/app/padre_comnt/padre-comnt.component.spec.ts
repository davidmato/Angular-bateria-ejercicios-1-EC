import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreComntComponent } from './padre-comnt.component';

describe('PadreComntComponent', () => {
  let component: PadreComntComponent;
  let fixture: ComponentFixture<PadreComntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreComntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreComntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
