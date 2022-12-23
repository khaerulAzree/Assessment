import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcumentComponent } from './procument.component';

describe('ProcumentComponent', () => {
  let component: ProcumentComponent;
  let fixture: ComponentFixture<ProcumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
