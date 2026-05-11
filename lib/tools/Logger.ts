import { test, APIResponse } from '@playwright/test';

export default class Logger {
  static async logRequestDetails(
    method: string,
    url: string,
    headers: Record<string, string>,
    body?: Record<string, unknown>,
  ): Promise<void> {
    await test.info().attach('Request Details:', {
      body:
        method.toUpperCase() +
        ': ' +
        url +
        '\n' +
        JSON.stringify(headers, null, 2) +
        (body ? '\n' + JSON.stringify(body, null, 2) : ''),
      contentType: 'application/json',
    });
  }

  static async logResponseDetails(response: APIResponse): Promise<void> {
    const responseBody = await response.json();
    await test.info().attach('Response Body', {
      body: JSON.stringify(responseBody, null, 2),
      contentType: 'application/json',
    });
  }
}
