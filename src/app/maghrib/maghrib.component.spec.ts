import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaghribComponent } from './maghrib.component';

describe('MaghribComponent', () => {
  let component: MaghribComponent;
  let fixture: ComponentFixture<MaghribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaghribComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaghribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
