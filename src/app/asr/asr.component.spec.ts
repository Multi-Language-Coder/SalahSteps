import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsrComponent } from './asr.component';

describe('AsrComponent', () => {
  let component: AsrComponent;
  let fixture: ComponentFixture<AsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
