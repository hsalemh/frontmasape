import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosvetementComponent } from './nosvetement.component';

describe('NosvetementComponent', () => {
  let component: NosvetementComponent;
  let fixture: ComponentFixture<NosvetementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosvetementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosvetementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
