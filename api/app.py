from flask import Flask
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)
api = Api(app)
CORS(app, origins='*')

turmas = [{
    "turmaId": 123,
    "descricao": "Uma turma de teste",
    "anoLetivo": 2019,
    "periodoLetivo": 10,
    "numeroVagas": 20,
    "status": "aberta"
}, {
    "turmaId": 122,
    "descricao": "Uma turma de teste 1",
    "anoLetivo": 2019,
    "periodoLetivo": 10,
    "numeroVagas": 20,
    "status": "fechado"
}, {
    "turmaId": 223,
    "descricao": "Uma turma de teste 2",
    "anoLetivo": 2019,
    "periodoLetivo": 10,
    "numeroVagas": 20,
    "status": "limiteDeVagas"
}]


class Turmas(Resource):
    def get(self):
        if (len(turmas) > 0):
            return {
                "hasNext": "true",
                "itens": turmas,
            }, 200, {
                'Access-Control-Allow-Origin': '*'
            }
        return "Turmas not found", 404


class Turma(Resource):
    def get(self, turmaId):
        for turma in turmas:
            if (turmaId == turma["turmaId"]):
                return turma, 200
        return "Turma not found", 404

    def post(self, descricao):
        parser = reqparse.RequestParser()
        parser.add_argument("turmaId")
        parser.add_argument("anoLetivo")
        parser.add_argument("periodoLetivo")
        parser.add_argument("numeroVagas")
        args = parser.parse_args()

        for turma in turmas:
            if (descricao == turma["descricao"]):
                return "Turma with descricao {} already exists".format(
                    descricao), 400

        turma = {
            "tuemaId": int(descricao[:5]),
            "descricao": descricao,
            "anoLetivo": args["anoLetivo"],
            "periodoLetivo": args["periodoLetivo"],
            "numeroVagas": args["numeroVagas"]
        }
        turmas.append(turma)
        return turma, 201

    def put(self, descricao):
        parser = reqparse.RequestParser()
        parser.add_argument("anoLetivo")
        parser.add_argument("periodoLetivo")
        parser.add_argument("numeroVagas")
        args = parser.parse_args()

        for turma in turmas:
            if (descricao == turma["descricao"]):
                turma["anoLetivo"] = args["anoLetivo"]
                turma["periodoLetivo"] = args["periodoLetivo"]
                turma["numeroVagas"] = args["numeroVagas"]
                return turma, 200

        turma = {
            "descricao": descricao,
            "anoLetivo": args["anoLetivo"],
            "periodoLetivo": args["periodoLetivo"],
            "numeroVagas": args["numeroVagas"]
        }
        turmas.append(turma)
        return user, 201

    def delete(self, descricao):
        global turmas
        turmas = [turma for turma in turmas if turma["descricao"] != descricao]
        return "{} is deleted.".format(descricao), 200


api.add_resource(Turmas, "/turmas")
api.add_resource(Turma, "/turma/<int:turmaId>")

app.run(debug=True)