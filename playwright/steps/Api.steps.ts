import { APIResponse, expect } from '@playwright/test';
import { step } from '@lib/tools/step.decorator';
import InvBgApi from '@lib/api/Inv.bg.api';
import jp from 'jsonpath';

export default class ApiSteps {
  protected response: APIResponse;

  constructor(private invBgApi: InvBgApi) {
    this.response = {} as APIResponse;
  }

  @step('Generate token')
  async postGenerateToken(email: string, password: string) {
    this.response = await this.invBgApi.postGenerateToken(email, password);
  }

  @step('Get Items List')
  async getItemsList() {
    this.response = await this.invBgApi.getItemsList();
  }

  @step('Create Item')
  async postCreateItem() {
    this.response = await this.invBgApi.createItem();
  }

  @step('Delete Item')
  async deleteItem(id: number) {
    this.response = await this.invBgApi.deleteItem(id);
  }

  @step('Get Element Value')
  async getElementValue(jsonPath: string) {
    const responseBody = await this.response.json();
    const elementValue = jp.query(responseBody, jsonPath)[0];
    return elementValue;
  }

  @step('Verify Element present in response body')
  async verifyTokenExists() {
    const responseBody = await this.response.json();
    expect(responseBody.token, 'Verify token key exists in response body').toBeTruthy();
    process.env.TOKEN = responseBody.token;
  }

  @step('Verify Element Value in response body')
  async verifyElementValue(jsonPath: string, expectedValue: number) {
    const responseBody: { id: string } = await this.response.json();
    const actualValue = jp.query(responseBody, jsonPath)[0];
    expect(actualValue, 'Verify Element Value').toBe(expectedValue);
  }
}
