import { environment } from "src/environments/environment";
import { enableProdMode } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { BackendConfigArgs, setupBackend } from "web-backend-api";

if (environment.production) {
  enableProdMode();
}

declare const require: any;

// Define directory where find all *.data.ts files
const dirDataSoruce = "../backend/";
// Then we find all the mocks.
const context = require.context("../backend/", true, /\.data\.ts$/);
// And load the modules.
context.keys().map(context);

const config: BackendConfigArgs = {
  post204: false, // return the item in body after POST
  put204: false, // return the item in body after PUT
  strategyId: "uuid",
};
setupBackend(config, { dbtype: "memory" })
  .then(() => {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then(() => {
        console.log("[Backend]", "Backend database application started!");
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
