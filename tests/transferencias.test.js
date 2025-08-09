import http from "k6/http";
import { sleep, check } from "k6";
import { obterToken } from "../helpers/autenticacao.js";
import { pegarBaseUrl } from "../utils/variaveis.js";

export const options = {
  iterations: 1,
};

export default function () {
  const token = obterToken();

  const url = pegarBaseUrl() + "/transferencias";

  const payload = {
    conta_origem: 1,
    conta_destino: 2,
    valor: 11,
    token: "",
  };

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  console.log(params);
  5;
  let res = http.post(url, payload, params);

  console.log(res);
  check(res, {
    "status is 201": (res) => res.status === 201,
  });
  sleep(1);
}
