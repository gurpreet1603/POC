import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendreceiveComponent } from './sendreceive.component';

describe('SendreceiveComponent', () => {
  let component: SendreceiveComponent;
  let fixture: ComponentFixture<SendreceiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendreceiveComponent]
    });
    fixture = TestBed.createComponent(SendreceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
