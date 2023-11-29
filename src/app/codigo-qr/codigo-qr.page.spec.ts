import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CodigoQRPage } from './codigo-qr.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('CodigoQRPage', () => {
  let component: CodigoQRPage;
  let fixture: ComponentFixture<CodigoQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CodigoQRPage],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodigoQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
