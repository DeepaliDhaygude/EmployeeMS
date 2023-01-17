import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeptlayoutComponent } from './admindeptlayout.component';

describe('AdmindeptlayoutComponent', () => {
  let component: AdmindeptlayoutComponent;
  let fixture: ComponentFixture<AdmindeptlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindeptlayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmindeptlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
