import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // Ramp up to 10 users over 10 seconds
    { duration: '20s', target: 10 }, // Stay at 10 users for 20 seconds
    { duration: '10s', target: 30 }, // Ramp down to 30 users over 10 seconds
    { duration: '20s', target: 30 }, // Stay at 30 users for 20 seconds
    { duration: '20s', target: 0 }, // Ramp down to 0 users over 20 seconds
  ],
  //vus: 10, // Number of virtual users
  //duration: '30s', // Duration of the test
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const url = 'http://localhost:3000/login';

  const payload = JSON.stringify({
    username: 'julio.lima',
    senha: '123456',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o status é 200': (r) => r.status === 200,
  });

  sleep(1);
}
