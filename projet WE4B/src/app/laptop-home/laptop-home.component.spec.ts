import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopHomeComponent } from './laptop-home.component';

describe('LaptopHomeComponent', () => {
  let component: LaptopHomeComponent;
  let fixture: ComponentFixture<LaptopHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
