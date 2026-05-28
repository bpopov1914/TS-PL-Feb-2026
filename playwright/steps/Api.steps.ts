import { APIResponse, expect } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';
import InvBgApi from '@lib/api/Inv.bg.api';
import { ItemDetails } from '@lib/resourses/enums/Interfaces';
import jp from 'jsonpath';

export default class ApiSteps {
  protected response: APIResponse;

  constructor(private invBgApi: InvBgApi) {
    this.response = {} as APIResponse;
  }

  /**
   * Sends token generation request to the API
   * @type {string} email - user's credentials
   * @type {string} password - user's credentials
   * @returns {Promise<void>}
   */
  @step('Generate token')
  async postGenerateToken(email: string, password: string): Promise<void> {
    this.response = await this.invBgApi.postGenerateToken(email, password);
  }

  /**
   * Sends a GET items request and returns items list
   * @returns {Promise<void>}
   */
  @step('Get Items List')
  async getItemsList(): Promise<void> {
    this.response = await this.invBgApi.getItemsList();
  }

  /**
   * Sends a GET item request and return item details
   * @returns {Promise<void>}
   */
  @step('Get Item')
  async getItem(id: number): Promise<void> {
    this.response = await this.invBgApi.getItem(id);
  }

  /**
   * Creates a new Item
   * @type {ItemDetails} itemDetails - The details of the item to be created, including name, price, currency, price for quantity, quantity unit, limited status, catalog number, outside ID, English name, and tags.
   * @returns {Promise<void>}
   */
  @step('Create Item')
  async postCreateItem({
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
  }: ItemDetails): Promise<void> {
    this.response = await this.invBgApi.createItem({
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
    });
  }

  /**
   * Sends an PATCH item request to update item details
   * @type {number} id - The ID of the item to be updated
   * @type {ItemDetails} itemDetails - The updated details of the item, including name, price, currency, price for quantity, quantity unit, limited status, catalog number, outside ID, English name, and tags.
   * @returns {Promise<void>}
   */
  @step('Update Item')
  async patchUpdateItem(id: number, itemDetails: ItemDetails): Promise<void> {
    this.response = await this.invBgApi.patchItem(id, itemDetails);
  }

  /**
   * Deletes an item
   * @returns {Promise<void>}
   */
  @step('Delete Item')
  async deleteItem(id: number): Promise<void> {
    this.response = await this.invBgApi.deleteItem(id);
  }

  /**
   * Extracts the value of a specific element from the response body using JSONPath
   * @type {string} jsonPath - JSONPath expression to locate the element in the response body
   * @returns {Promise<unknown>} - The value of the specified element
   */
  @step('Get Element Value')
  async getElementValue(jsonPath: string): Promise<unknown> {
    const responseBody = await this.response.json();
    const elementValue: unknown = jp.query(responseBody, jsonPath)[0];
    return elementValue;
  }

  /**
   * Verifies that the response status code matches the expected status code
   * @type {number} status - The expected HTTP status code to verify against the actual response status code
   * @returns {Promise<void>}
   */
  @step('Verify Response Status')
  async verifyResponseStatus(status: number): Promise<void> {
    const expectedStatus = this.response.status();
    expect(status, 'Verify response status').toEqual(expectedStatus);
  }

  /**
   * Verifies that the response body contains a token and stores it in an environment variable for future use
   * @returns {Promise<void>}
   */
  @step('Verify Element present in response body')
  async verifyTokenExistsAndSaveIt(): Promise<void> {
    const responseBody = await this.response.json();
    expect(responseBody.token, 'Verify token key exists in response body').toBeTruthy();
    process.env.TOKEN = responseBody.token;
  }

  /**
   * Verifies that the value of a specific element in the response body matches the expected value
   * @type {string} jsonPath - JSONPath expression to locate the element in the response body
   * @type {number} expectedValue - The expected value to verify against the actual value extracted from the response body
   * @returns {Promise<void>}
   */
  @step('Verify Element Value in response body')
  async verifyElementNumberValue(jsonPath: string, expectedValue: number): Promise<void> {
    const responseBody = await this.response.json();
    const actualValue = jp.query(responseBody, jsonPath)[0];
    expect(actualValue, 'Verify Element Value').toBe(expectedValue);
  }

  /**
   * Verifies that the value of a specific element in the response body matches the expected value
   * @type {string} jsonPath - JSONPath expression to locate the element in the response body
   * @type {string} expectedValue - The expected value to verify against the actual value extracted from the response body
   * @returns {Promise<void>}
   */
  @step('Verify Element Value in response body')
  async verifyElementStringValue(jsonPath: string, expectedValue: string): Promise<void> {
    const responseBody = await this.response.json();
    const actualValue = jp.query(responseBody, jsonPath)[0];
    expect(actualValue, 'Verify Element Value').toBe(expectedValue);
  }
}
