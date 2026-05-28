import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';
import { faker } from '@faker-js/faker';

[
  {
    scenario: 'Корпоративен',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    planHeader: {
      priceEuro: 'по договаряне',
      priceLv: '',
    },
    planValues: {
      corporate: 'неограничени',
      clients: 'клиенти',
      invoices: 'фактури',
      employees: 'служители',
    },
    planFeatures: {
      feature1: 'REST API за достъп',
      feature2: 'допълнително архивиране',
      feature3: 'приоритетен support',
    },
  },
  {
    scenario: 'Бизнес',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    planHeader: {
      priceEuro: '28 €/месец',
      priceLv: '54.76 лв./месец',
    },
    planValues: {
      corporate: '',
      clients: '1000 клиента',
      invoices: '1000 фактури/месец',
      employees: '25 служителя ',
    },
    planFeatures: {
      feature1: 'с Ваше лого',
      feature2: 'с електронен подпис',
      feature3: '',
    },
  },
  {
    scenario: 'Малък бизнес',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    planHeader: {
      priceEuro: '8 €/месец',
      priceLv: '15.65 лв./месец',
    },
    planValues: {
      corporate: '',
      clients: '150 клиента',
      invoices: '150 фактури/месец',
      employees: '10 служителя',
    },
    planFeatures: {
      feature1: 'с Ваше лого',
      feature2: 'с електронен подпис',
      feature3: '',
    },
  },
  {
    scenario: 'Персонален',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    planHeader: {
      priceEuro: '4 €/месец',
      priceLv: '7.82 лв./месец',
    },
    planValues: {
      corporate: '',
      clients: '15 клиента',
      invoices: '15 фактури/месец',
      employees: '1 служителя',
    },
    planFeatures: {
      feature1: 'с Ваше лого',
      feature2: '',
      feature3: '',
    },
  },
  {
    scenario: 'Безплатен',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    planHeader: {
      priceEuro: '0 €/месец',
      priceLv: '0 лв./месец',
    },
    planValues: {
      corporate: '',
      clients: '5 клиента',
      invoices: '5 фактури/месец',
      employees: '1 служителя',
    },
    planFeatures: {
      feature1: '',
      feature2: '',
      feature3: '',
    },
  },
].forEach(({ scenario, username, password, planHeader, planValues, planFeatures }) => {
  test(
    `Verify details of ${scenario} Plan`,
    {
      tag: ['@homework-07'],
      annotation: [
        { type: 'Plan Header', description: JSON.stringify(planHeader) },
        { type: 'Plan Value', description: JSON.stringify(planValues) },
        { type: 'Plan Features', description: JSON.stringify(planFeatures) },
      ],
    },
    async ({ sharedSteps, landingSteps, newInvoiceSteps, settingsPlanSteps }) => {
      await sharedSteps.navigateToSite('https://st2016.inv.bg/');
      await sharedSteps.login(username, password);
      await landingSteps.navigateToNewInvoicePage();
      await newInvoiceSteps.navigateToSettingsPlanPage();
      await settingsPlanSteps.verifyPlanHeader(scenario, planHeader);
      await settingsPlanSteps.verifyPlanValues(scenario, planValues);
      await settingsPlanSteps.verifyPlanFeatures(scenario, planFeatures);
    },
  );
});

[
  {
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    clientName: faker.company.name(),
  },
].forEach(({ username, password, clientName }) => {
  test.only(
    `Create and delete client`,
    {
      tag: ['@homework-07'],
      annotation: [{ type: 'Client Name', description: clientName }],
    },
    async ({ sharedSteps, landingSteps, clientsSteps }) => {
      await sharedSteps.navigateToSite('https://st2016.inv.bg/');
      await sharedSteps.login(username, password);
      await landingSteps.navigateToClientsPage();
      await clientsSteps.navigateToClientAddPage();
      await clientsSteps.createClient(clientName);
      await landingSteps.navigateToClientsPage();
      await clientsSteps.deleteClient(clientName);
    },
  );
});
