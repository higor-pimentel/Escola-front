import { async, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import {
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from "@po-ui/ng-components";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  let app: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        PoMenuModule,
        PoPageModule,
        PoToolbarModule,
        RouterTestingModule,
      ],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it("deve instanciar o componente", () => {
    expect(app).toBeTruthy();
  });

  it("deve definir os itens do menu", () => {
    expect(app.itensMenu).toEqual([]);

    app.definirItensMenu();

    expect(app.itensMenu.length).toBe(1);
  });
});
