import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFigureComponent } from './banner-figure.component';

describe('BannerFigureComponent', () => {
  let component: BannerFigureComponent;
  let fixture: ComponentFixture<BannerFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
