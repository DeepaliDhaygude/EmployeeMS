import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedrequesttouserComponent } from './assignedrequesttouser.component';

describe('AssignedrequesttouserComponent', () => {
  let component: AssignedrequesttouserComponent;
  let fixture: ComponentFixture<AssignedrequesttouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedrequesttouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedrequesttouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
