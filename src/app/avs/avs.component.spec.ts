import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvsComponent } from './avs.component';

describe('AvsComponent', () => {
  let component: AvsComponent;
  let fixture: ComponentFixture<AvsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvsComponent]
    });
    fixture = TestBed.createComponent(AvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
