import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosPage } from './cursos.page';
import { RouterTestingModule } from '@angular/router/testing'; // Importa RouterTestingModule

describe('CursosPage', () => {
  let component: CursosPage;
  let fixture: ComponentFixture<CursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CursosPage],
      imports: [RouterTestingModule], // Agrega RouterTestingModule a los imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
