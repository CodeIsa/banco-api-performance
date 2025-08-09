import http from "k6/http";
import { pegarBaseUrl } from "../utils/variaveis.js";

const postlogin = JSON.parse(open("../fixtures/postLogin.json"));

export function obterToken() {
  const url = pegarBaseUrl() + "/login";

  // Modify the username for each iteration to simulate different users
  //postlogin.username = 'junior.lima';
  const payload = JSON.stringify(postlogin);

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);

  return res.json("token"); // Assuming the response contains a token field
}
