import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],

  thresholds: {
    http_req_duration: ['p(90) < 400', 'p(95) < 500']
  }
};

export default function() {
/*  const url = 'http://localhost:8080';

  const payload = {
    j_username: 'demo',
    j_password: 'demo',
  };

  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const res = http.post(url + '/auth', payload, params);
  const jar = http.cookieJar();
  const cookies = jar.cookiesForURL(url);
  check(res, { 
    'status was 200': r => r.status === 200,
   });


  const ID = cookies.JSESSIONID[0];
  const pdfGen = http.post(url + '/generatePDF', {
    cookies: {
      JSESSIONID: ID,
    },
  })

  check(pdfGen, {
    'PDF GENERATION 200': r => r.status === 200,
  });

  sleep(1);*/
  http.get('http://test.k6.io/contacts.php');
  sleep(3);
}
