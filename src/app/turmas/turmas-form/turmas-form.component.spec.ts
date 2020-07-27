import { TestBed } from "@angular/core/testing";
import { TurmasFormComponent } from "./turmas-form.component";
import { PoPageDynamicEditActionsService } from "@po-ui/ng-templates/lib/components/po-page-dynamic-edit/po-page-dynamic-edit-actions.service";
import { PoPageDynamicEditModule } from "@po-ui/ng-templates";
import { RouterTestingModule } from "@angular/router/testing";

describe("O TurmasFormCompoent", () => {
  let component: TurmasFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurmasFormComponent],
      imports: [RouterTestingModule.withRoutes([]), PoPageDynamicEditModule],
    }).compileComponents();
  });
  beforeEach(() => {
    const fixture = TestBed.createComponent(TurmasFormComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("deve instaciar o component", () => {
    expect(component).toBeTruthy();
  });

  it("deve definir elementos da pagina", () => {
    expect(component.actions).toBeTruthy();
    expect(component.breadcrumb).toBeTruthy();
    expect(component.fields).toBeTruthy();
  });
});
