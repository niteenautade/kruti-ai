import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendableLinkComponent } from './sendable-link.component';

describe('SendableLinkComponent', () => {
  let component: SendableLinkComponent;
  let fixture: ComponentFixture<SendableLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendableLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendableLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
