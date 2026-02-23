import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineProfiles } from './online-profiles';

describe('OnlineProfiles', () => {
  let component: OnlineProfiles;
  let fixture: ComponentFixture<OnlineProfiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineProfiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineProfiles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
