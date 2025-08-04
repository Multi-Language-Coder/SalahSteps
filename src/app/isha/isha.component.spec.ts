import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IshaComponent } from './isha.component';

describe('IshaComponent', () => {
  let component: IshaComponent;
  let fixture: ComponentFixture<IshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IshaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
