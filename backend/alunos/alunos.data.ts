import { dataService, IBackendService } from "web-backend-api";
import { collectionName, alunos } from "./alunos.mock";

dataService(collectionName, (dbService: IBackendService) => {
  alunos.forEach((aluno) => {
    dbService.storeData(collectionName, aluno);
  });
});
