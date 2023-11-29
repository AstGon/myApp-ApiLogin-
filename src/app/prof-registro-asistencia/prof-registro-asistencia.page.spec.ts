import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfRegistroAsistenciaPage } from './prof-registro-asistencia.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfRegistroAsistenciaPage', () => {
  let component: ProfRegistroAsistenciaPage;
  let fixture: ComponentFixture<ProfRegistroAsistenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfRegistroAsistenciaPage],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfRegistroAsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
