import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewerComponent } from './login-viewer.component';

describe('LoginViewerComponent', () => {
  let component: LoginViewerComponent;
  let fixture: ComponentFixture<LoginViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
