import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WuduComponent } from './wudu.component';

describe('WuduComponent', () => {
  let component: WuduComponent;
  let fixture: ComponentFixture<WuduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WuduComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WuduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
