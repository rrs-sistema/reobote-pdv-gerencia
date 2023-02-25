import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoViewerComponent } from './pagamento-viewer.component';

describe('PagamentoViewerComponent', () => {
  let component: PagamentoViewerComponent;
  let fixture: ComponentFixture<PagamentoViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
