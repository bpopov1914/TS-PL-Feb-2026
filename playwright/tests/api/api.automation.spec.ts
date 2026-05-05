import { test } from '@tests/steps/fixtures';

test(`Get Items`, { tag: '@api' }, async ({ apiSteps }) => {
  await apiSteps.getItemsList();
  await apiSteps.verifyElementValue('$.total', 16);
});

test(`Create and Delete item`, { tag: '@api' }, async ({ apiSteps }) => {
  await apiSteps.postCreateItem();
  const id: number = await apiSteps.getElementValue('$.id');
  await apiSteps.deleteItem(id);
});