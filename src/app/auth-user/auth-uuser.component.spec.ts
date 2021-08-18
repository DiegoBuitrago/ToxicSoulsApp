import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUuserComponent } from './auth-uuser.component';

describe('AuthUuserComponent', () => {
  let component: AuthUuserComponent;
  let fixture: ComponentFixture<AuthUuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
