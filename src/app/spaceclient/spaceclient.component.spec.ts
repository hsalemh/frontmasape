import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceclientComponent } from './spaceclient.component';

describe('SpaceclientComponent', () => {
  let component: SpaceclientComponent;
  let fixture: ComponentFixture<SpaceclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
