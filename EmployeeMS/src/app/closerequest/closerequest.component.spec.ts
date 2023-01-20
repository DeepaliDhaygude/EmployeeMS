import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloserequestComponent } from './closerequest.component';

describe('CloserequestComponent', () => {
  let component: CloserequestComponent;
  let fixture: ComponentFixture<CloserequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloserequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloserequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
