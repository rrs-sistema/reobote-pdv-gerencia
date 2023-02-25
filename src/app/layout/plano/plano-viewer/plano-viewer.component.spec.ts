import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoViewerComponent } from './plano-viewer.component';

describe('PlanoViewerComponent', () => {
  let component: PlanoViewerComponent;
  let fixture: ComponentFixture<PlanoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanoViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
