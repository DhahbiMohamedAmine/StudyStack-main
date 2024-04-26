import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFichiersComponent } from './gest-fichiers.component';

describe('GestFichiersComponent', () => {
  let component: GestFichiersComponent;
  let fixture: ComponentFixture<GestFichiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestFichiersComponent]
    });
    fixture = TestBed.createComponent(GestFichiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
