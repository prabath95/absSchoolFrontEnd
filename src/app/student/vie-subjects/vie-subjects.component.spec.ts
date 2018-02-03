import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieSubjectsComponent } from './vie-subjects.component';

describe('VieSubjectsComponent', () => {
  let component: VieSubjectsComponent;
  let fixture: ComponentFixture<VieSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
