import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicEventsComponent } from './clic-events.component';

describe('ClicEventsComponent', () => {
  let component: ClicEventsComponent;
  let fixture: ComponentFixture<ClicEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClicEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
