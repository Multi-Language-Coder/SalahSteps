import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZuhrComponent } from './zuhr.component';

describe('ZuhrComponent', () => {
  let component: ZuhrComponent;
  let fixture: ComponentFixture<ZuhrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZuhrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZuhrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
