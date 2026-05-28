import { APIRequestContext, APIResponse } from '@playwright/test';
import Logger from '@lib/tools/Logger';
import { ItemDetails } from '@lib/resourses/enums/Interfaces';

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
    await Logger.logRequestDetails('POST', url, headers, body);

    // Make the POST request to aquire the token
    const response: APIResponse = await this.request.post(url, { headers: headers, data: body });

    // Log the response details
    await Logger.logResponseDetails(response);

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
    await Logger.logRequestDetails('GET', url, { ...this.headers, Authorization: `Bearer ******` });

    // Make the GET request to show item list
    const response: APIResponse = await this.request.get(url, {
      headers: this.headers,
    });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends a GET item request and return item details
   * @returns {Promise<APIResponse>}
   */
  async getItem(id: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/items/${id}`;

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('GET', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });

    // Make the GET request to show item details
    const response: APIResponse = await this.request.get(url, { headers: this.headers });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Creates a new Item
   * @type {ItemDetails} itemDetails - The details of the item to be created, including name, price, currency, price for quantity, quantity unit, limited status, catalog number, outside ID, English name, and tags.
   * @returns {Promise<APIResponse>}
   */
  async createItem({
    name,
    price,
    currency,
    price_for_quantity,
    quantity_unit,
    is_limited,
    catalog_number,
    outside_id,
    name_en,
    tags,
  }: ItemDetails): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/items';
    const body = {
      name: name,
      price: price,
      currency: currency,
      price_for_quantity: price_for_quantity,
      quantity_unit: quantity_unit,
      is_limited: is_limited,
      catalog_number: catalog_number,
      outside_id: outside_id,
      name_en: name_en,
      tags: tags,
    };

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'POST',
      url,
      {
        ...this.headers,
        Authorization: `Bearer ******`,
      },
      body,
    );

    // Make the POST request to create the item
    const response: APIResponse = await this.request.post(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends an PATCH item request to update item details
   * @returns {Promise<APIResponse>}
   */
  async patchItem(
    id: number,
    {
      name,
      price,
      currency,
      price_for_quantity,
      quantity_unit,
      is_limited,
      catalog_number,
      outside_id,
      name_en,
      tags,
    }: ItemDetails,
  ): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/items/${id}`;

    const body = {
      name: name,
      price: price,
      currency: currency,
      price_for_quantity: price_for_quantity,
      quantity_unit: quantity_unit,
      is_limited: is_limited,
      catalog_number: catalog_number,
      outside_id: outside_id,
      name_en: name_en,
      tags: tags,
    };

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'PATCH',
      url,
      { ...this.headers, Authorization: `Bearer ******` },
      body,
    );

    // Make the PATCH to update the item details:
    const response: APIResponse = await this.request.patch(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details in case of error to facilitate debugging
    await Logger.logResponseDetails(response);

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
    await Logger.logRequestDetails('DELETE', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });

    // Make the DELETE request to delete the item
    const response: APIResponse = await this.request.delete(url, { headers: this.headers });

    // Log the response details in case of error to facilitate debugging
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends a GET Client request and returns client list
   * @returns {Promise<APIResponse>}
   */
  async getClientsList(): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/clients';

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('GET', url, { ...this.headers, Authorization: `Bearer ******` });

    // Make the GET request to show item list
    const response: APIResponse = await this.request.get(url, {
      headers: this.headers,
    });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Creates a new Client
   * @type {string} clientName - The name of the client to be created.
   * @returns {Promise<APIResponse>}
   */
  async createClient(clientName: string): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + '/clients';
    const body = {
      name: clientName,
      town: 'София',
      address: 'Славееви гори 21',
      bulstat: '112233445566',
      is_reg_vat: false,
      vat_number: 'BG112233445566',
      mol: 'Георги Йорданов',
      is_person: false,
      egn: 8210129421,
      country: 'Германия',
      code: 'Client-79832',
      office: 'Горни Брод, централен офис.',
      delivery_address: 'ул. Климент Охридски № 125',
      name_en: 'Firma EOOD',
      town_en: 'Sofia',
      address_en: 'Slaveevi gori 21',
      mol_en: 'Georgi Jordanov',
      country_en: 'Germany',
      custom_properties: [
        {
          key: 'лицензионен-номер',
          value: '12049092',
          use_in_invoices: true,
        },
      ],
    };

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'POST',
      url,
      {
        ...this.headers,
        Authorization: `Bearer ******`,
      },
      body,
    );

    // Make the POST request to create the client
    const response: APIResponse = await this.request.post(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends a GET client request and return client details
   * @returns {Promise<APIResponse>}
   */
  async getClient(id: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/clients/${id}`;

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('GET', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });

    // Make the GET request to show client details
    const response: APIResponse = await this.request.get(url, { headers: this.headers });

    // Log the response details
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Sends an PATCH client request to update client details
   * @type {number} id - The ID of the client to be updated
   * @type {string} clientName - The updated name of the client
   * @returns {Promise<APIResponse>}
   */
  async patchClient(id: number, clientName: string): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/clients/${id}`;
    const body = {
      name: clientName,
    };

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails(
      'PATCH',
      url,
      { ...this.headers, Authorization: `Bearer ******` },
      body,
    );

    // Make the PATCH to update the client details:
    const response: APIResponse = await this.request.patch(url, {
      headers: this.headers,
      data: body,
    });

    // Log the response details in case of error to facilitate debugging
    await Logger.logResponseDetails(response);

    return response;
  }

  /**
   * Deletes a client
   * @returns {Promise<APIResponse>}
   */
  async deleteClient(id: number): Promise<APIResponse> {
    // Prepare the data for the request
    const url: string = this.baseUrl + `/clients/${id}`;

    // Log the request details and hide sensitive information in logs
    await Logger.logRequestDetails('DELETE', url, {
      ...this.headers,
      Authorization: `Bearer ******`,
    });

    // Make the DELETE request to delete the item
    const response: APIResponse = await this.request.delete(url, { headers: this.headers });

    // Log the response details in case of error to facilitate debugging
    await Logger.logResponseDetails(response);

    return response;
  }
}
