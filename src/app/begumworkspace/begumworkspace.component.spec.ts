import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BegumworkspaceComponent } from './begumworkspace.component';

describe('BegumworkspaceComponent', () => {
  let component: BegumworkspaceComponent;
  let fixture: ComponentFixture<BegumworkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BegumworkspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BegumworkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
