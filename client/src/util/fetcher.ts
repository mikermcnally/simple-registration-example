export default class Fetcher {
  readonly host: string;

  constructor(host: string) {
    this.host = host;
  }

  async sendRequest(
    method: 'POST' | 'PUT' | 'GET' | 'DELETE',
    endpoint: string,
    body?: any,
  ) {
    const response = await fetch(this.host + endpoint, {
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      method,
      body,
    });

    return validateResponse(response);
  }

  async get(endpoint: string) {
    return this.sendRequest('GET', endpoint);
  }

  async post(endpoint: string, body: any) {
    return this.sendRequest('POST', endpoint, JSON.stringify(body));
  }

  async put(endpoint: string, body: any) {
    return this.sendRequest('PUT', endpoint, JSON.stringify(body));
  }

  async delete(endpoint: string) {
    return this.sendRequest('DELETE', endpoint);
  }
}

async function validateResponse(response: Response) {
  if ([200, 201].includes(response.status)) {
    return response.json();
  } else if ([204, 301].includes(response.status)) {
    return;
  } else {
    switch (response.status) {
      case 401:
        throw new Error('Not Authorized');
      case 403:
        throw new Error('Forbidden');
      case 404:
        throw new Error('Not Found');
      case 422:
        throw await response.json();
      default:
        throw new Error('Request Failed');
    }
  }
}
