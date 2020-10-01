import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSenttingsComponent } from './user-senttings.component';

describe('UserSenttingsComponent', () => {
  let component: UserSenttingsComponent;
  let fixture: ComponentFixture<UserSenttingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSenttingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSenttingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
