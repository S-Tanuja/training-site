import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatBgComponent } from './repeat-bg.component';

describe('RepeatBgComponent', () => {
  let component: RepeatBgComponent;
  let fixture: ComponentFixture<RepeatBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepeatBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
