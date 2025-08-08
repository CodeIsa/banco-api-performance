import http from 'k6/http';
import { sleep, check } from 'k6';
const postlogin = JSON.parse(open('../fixtures/postLogin.json'));

// This file is used to test the login endpoint of the application.
// It simulates multiple users logging in concurrently to assess the performance of the login functionality.

export const options = {
  // stages: [
  //   { duration: '10s', target: 10 }, // Ramp up to 10 users over 10 seconds
  //   { duration: '20s', target: 10 }, // Stay at 10 users for 20 seconds
  //   { duration: '10s', target: 30 }, // Ramp down to 30 users over 10 seconds
  //   { duration: '20s', target: 30 }, // Stay at 30 users for 20 seconds
  //   { duration: '20s', target: 0 }, // Ramp down to 0 users over 20 seconds
  // ],
  //vus: 10, // Number of virtual users
  //duration: '30s', // Duration of the test
  iterations: 1, // Total number of iterations to run
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const url = 'http://localhost:3000/login';

  // Modify the username for each iteration to simulate different users
  //postlogin.username = 'junior.lima';
  console.log(postlogin);
  const payload = JSON.stringify(postlogin);

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
