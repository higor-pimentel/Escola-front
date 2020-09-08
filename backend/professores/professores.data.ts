import { dataService, IBackendService } from "web-backend-api";
import { collectionName, professores } from "./professores.mock";

dataService(collectionName, (dbService: IBackendService) => {
  professores.forEach((professor) => {
    dbService.storeData(collectionName, professor);
  });
});
