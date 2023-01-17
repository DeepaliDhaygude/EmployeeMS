import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeptdashComponent } from './admindeptdash.component';

describe('AdmindeptdashComponent', () => {
  let component: AdmindeptdashComponent;
  let fixture: ComponentFixture<AdmindeptdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindeptdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindeptdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
