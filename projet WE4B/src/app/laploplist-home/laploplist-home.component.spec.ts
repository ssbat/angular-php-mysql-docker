import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaploplistHomeComponent } from './laploplist-home.component';

describe('LaploplistHomeComponent', () => {
  let component: LaploplistHomeComponent;
  let fixture: ComponentFixture<LaploplistHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaploplistHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaploplistHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
