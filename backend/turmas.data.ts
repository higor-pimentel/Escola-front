import {
  dataService,
  IBackendService,
  ResponseInterceptorFn,
  IInterceptorUtils,
} from "web-backend-api";
import { collectionName, turmas } from "./turmas.mock";

dataService(collectionName, (dbService: IBackendService) => {
  turmas.forEach((turma) => {
    dbService.storeData(collectionName, turma);
  });
});
