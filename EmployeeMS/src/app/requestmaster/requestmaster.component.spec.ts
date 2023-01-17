import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestmasterComponent } from './requestmaster.component';

describe('RequestmasterComponent', () => {
  let component: RequestmasterComponent;
  let fixture: ComponentFixture<RequestmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
