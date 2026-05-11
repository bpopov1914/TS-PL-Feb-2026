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
    // first try to log the response body as JSON, if it fails, log it as plain text, if it fails again skip - response body is probably empty
    try {
      const responseBody = await response.json();
      await test.info().attach('Response Body', {
        body: JSON.stringify(responseBody, null, 2),
        contentType: 'application/json',
      });
    } catch (error) {
      try {
        const responseText = await response.text();
        await test.info().attach('Response Body', {
          body: responseText,
          contentType: 'text/plain',
        });
      } catch (error) {
        console.error('Response body is not in JSON format, printing raw text:', error);
      }
    }
  }
}
