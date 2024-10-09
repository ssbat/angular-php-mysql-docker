import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosHomeComponent } from './photos-home.component';

describe('PhotosHomeComponent', () => {
  let component: PhotosHomeComponent;
  let fixture: ComponentFixture<PhotosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
