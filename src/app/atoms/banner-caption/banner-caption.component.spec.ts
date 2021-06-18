import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCaptionComponent } from './banner-caption.component';

describe('BannerCaptionComponent', () => {
  let component: BannerCaptionComponent;
  let fixture: ComponentFixture<BannerCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCaptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
