import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NrecomponentComponent } from './nrecomponent.component';

describe('NrecomponentComponent', () => {
  let component: NrecomponentComponent;
  let fixture: ComponentFixture<NrecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NrecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NrecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
