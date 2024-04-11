import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolopmentComponent } from './devolopment.component';

describe('DevolopmentComponent', () => {
  let component: DevolopmentComponent;
  let fixture: ComponentFixture<DevolopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevolopmentComponent]
    });
    fixture = TestBed.createComponent(DevolopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
