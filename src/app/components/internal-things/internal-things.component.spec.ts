import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalThingsComponent } from './internal-things.component';

describe('InternalThingsComponent', () => {
  let component: InternalThingsComponent;
  let fixture: ComponentFixture<InternalThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
