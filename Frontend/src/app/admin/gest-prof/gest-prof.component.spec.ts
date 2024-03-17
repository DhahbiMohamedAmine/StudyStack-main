import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestProfComponent } from './gest-prof.component';

describe('GestProfComponent', () => {
  let component: GestProfComponent;
  let fixture: ComponentFixture<GestProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestProfComponent]
    });
    fixture = TestBed.createComponent(GestProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
