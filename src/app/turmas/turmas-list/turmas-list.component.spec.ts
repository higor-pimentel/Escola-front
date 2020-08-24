import { TestBed } from "@angular/core/testing";
import { TurmasListComponent } from "./turmas-list.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("TurmasListaComponent", () => {
  let component: TurmasListComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurmasListComponent],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(TurmasListComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('deve ter o título "Lista de Turmas"', () => {
    const fixture = TestBed.createComponent(TurmasListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("title").textContent).toContain(
      "Lista de turmas"
    );
  });
});
