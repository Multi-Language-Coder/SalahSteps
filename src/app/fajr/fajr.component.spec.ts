import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FajrComponent } from './fajr.component';

describe('FajrComponent', () => {
  let component: FajrComponent;
  let fixture: ComponentFixture<FajrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FajrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FajrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
