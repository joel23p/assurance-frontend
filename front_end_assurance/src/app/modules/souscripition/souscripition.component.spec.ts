import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouscripitionComponent } from './souscripition.component';

describe('SouscripitionComponent', () => {
  let component: SouscripitionComponent;
  let fixture: ComponentFixture<SouscripitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouscripitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SouscripitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
