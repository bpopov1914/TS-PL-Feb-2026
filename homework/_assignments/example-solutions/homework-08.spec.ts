import { test } from '@tests/steps/fixtures';
import { faker } from '@faker-js/faker';

// Note: In order for client creation to work no deleted client with the same IBAN must exist in the system. If such client exists, please delete it manually here: https://st2016.inv.bg/clients/deleted

test(`Create and Delete Client`, { tag: '@homework-08' }, async ({ apiSteps }) => {
  const originalClientName = faker.company.name();
  await apiSteps.postCreateClient(originalClientName);
  await apiSteps.verifyResponseStatus(201);
  const id: number = Number(await apiSteps.getElementValue('$.id'));

  await apiSteps.getClient(id);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.name', originalClientName);

  const updatedClientName = `${originalClientName} Updated`;
  await apiSteps.patchUpdateClient(id, updatedClientName);
  await apiSteps.verifyResponseStatus(204);

  await apiSteps.getClient(id);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.name', updatedClientName);

  await apiSteps.deleteClient(id);
  await apiSteps.verifyResponseStatus(204);
});
