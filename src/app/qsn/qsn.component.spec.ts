import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QsnComponent } from './qsn.component';

describe('QsnComponent', () => {
  let component: QsnComponent;
  let fixture: ComponentFixture<QsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
