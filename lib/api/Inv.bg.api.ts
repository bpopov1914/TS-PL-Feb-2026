import { APIRequestContext, APIResponse, test } from '@playwright/test';

export default class InvBgApi {
  readonly request: APIRequestContext;
  private readonly baseUrl: string;
  private readonly headers: Record<string, string>;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseUrl = 'https://api.inv.bg/v3';
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TOKEN}`,
      'Accept-Language': 'bg',
    };
  }

  /**
   * Sends token generation request to the API
   * @type {string} email - user's credentials
   * @type {string} password - user's credentials
   * @returns {Promise<APIResponse>}
   */
  async postGenerateToken(email: string, password: string): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/login/token ';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const body = {
      email: email,
      password: password,
      domain: 'st2016',
    };

    // Log the request details and hide sensitive information in logs
    await test.info().attach('Request Enpoint', {
      body: 'POST: ' + url,
      contentType: 'application/json',
    });
    await test.info().attach('Request headers', {
      body: JSON.stringify(headers, null, 2),
      contentType: 'application/json',
    });
    await test.info().attach('Request body', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json',
    });

    // Make the POST request to aquire the token
    const response: APIResponse = await this.request.post(url, { headers: headers, data: body });

    // Log the response details
    const responseBody = await response.json();
    await test.info().attach('Response Body', {
      body: JSON.stringify(responseBody, null, 2),
      contentType: 'application/json',
    });

    return response;
  }

  /**
   * Sends a GET items request and returns items list
   * @returns {Promise<APIResponse>}
   */
  async getItemsList(): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/items';

    // Log the request details and hide sensitive information in logs
    await test.info().attach('Request Enpoint', {
      body: 'GET: ' + url,
      contentType: 'application/json',
    });
    await test.info().attach('Request headers', {
      body: JSON.stringify(this.headers, null, 2),
      contentType: 'application/json',
    });

    // Make the GET request to show item list
    const response: APIResponse = await this.request.get(url, { headers: this.headers });

    // Log the response details
    const responseBody = await response.json();
    await test.info().attach('Response Body', {
      body: JSON.stringify(responseBody, null, 2),
      contentType: 'application/json',
    });

    return response;
  }

  /**
   * Creates a new Item
   * @returns {Promise<APIResponse>}
   */
  async createItem(): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/items';
    const body = {
      name: '',
      price: 0.25,
      currency: 'BGN',
      price_for_quantity: 1,
      quantity_unit: 'кг.',
      is_limited: false,
      catalog_number: '46',
      outside_id: 46,
      name_en: 'Chewing Gum Turbo',
      tags: ['tag_1', 'tag_2'],
    };

    // Log the request details and hide sensitive information in logs
    await test.info().attach('Request Enpoint', {
      body: 'POST: ' + url,
      contentType: 'application/json',
    });
    await test.info().attach('Request headers', {
      body: JSON.stringify(this.headers, null, 2),
      contentType: 'application/json',
    });
    await test.info().attach('Request body', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json',
    });

    // Make the GET request to show item list
    const response: APIResponse = await this.request.post(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details
    const responseBody = await response.json();
    await test.info().attach('Response Body', {
      body: JSON.stringify(responseBody, null, 2),
      contentType: 'application/json',
    });

    return response;
  }

  /**
   * Deletes an item
   * @returns {Promise<APIResponse>}
   */
  async deleteItem(id: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/items/${id}`;

    // Log the request details and hide sensitive information in logs
    await test.info().attach('Request Enpoint', {
      body: 'DELETE: ' + url,
      contentType: 'application/json',
    });
    await test.info().attach('Request headers', {
      body: JSON.stringify(this.headers, null, 2),
      contentType: 'application/json',
    });

    // Make the GET request to show item list
    const response: APIResponse = await this.request.delete(url, { headers: this.headers });

    return response;
  }
}
