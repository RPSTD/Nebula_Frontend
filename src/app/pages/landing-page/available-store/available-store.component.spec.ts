import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableStoreComponent } from './available-store.component';

describe('AvailableStoreComponent', () => {
  let component: AvailableStoreComponent;
  let fixture: ComponentFixture<AvailableStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableStoreComponent]
    });
    fixture = TestBed.createComponent(AvailableStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
