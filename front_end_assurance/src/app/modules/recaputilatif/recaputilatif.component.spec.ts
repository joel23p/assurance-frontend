import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaputilatifComponent } from './recaputilatif.component';

describe('RecaputilatifComponent', () => {
  let component: RecaputilatifComponent;
  let fixture: ComponentFixture<RecaputilatifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaputilatifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecaputilatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
