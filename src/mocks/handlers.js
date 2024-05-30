import { http, HttpResponse } from 'msw';

const bookingInformation = {
"when":"2024-05-21T00:42",
"lanes":"1",
"people":"2",
"shoes":["42", "39"],
"price":340,
"id":"STR851VJQK",
"active":true
}

console.log(bookingInformation);


export const handlers = [
  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', () => {
    return HttpResponse.json(bookingInformation);
}),

];