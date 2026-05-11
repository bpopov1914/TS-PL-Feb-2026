import { test } from '@tests/steps/fixtures';
import { ItemDetails } from '@lib/resourses/enums/Interfaces';

// API Docs: https://api.inv.bg/v3/docs (use this for reference)
// API Swagger Documentation: https://api.inv.bg/v3/swagger-ui/  (broken at the moment, but should be fixed in the future)

test(`Get Items`, { tag: '@api' }, async ({ apiSteps }) => {
  await apiSteps.getItemsList();
  await apiSteps.verifyElementNumberValue('$.total', 16);
});

test(`Create and Delete item`, { tag: '@api' }, async ({ apiSteps }) => {
  // Test data for creating a new item:
  const itemDetails: ItemDetails = {
    name: 'Дъвка Турбо',
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
  await apiSteps.postCreateItem(itemDetails);
  await apiSteps.verifyResponseStatus(201);
  const id: number = Number(await apiSteps.getElementValue('$.id'));

  await apiSteps.getItem(id);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.name', itemDetails.name);
  await apiSteps.verifyElementNumberValue('$.price', itemDetails.price);
  await apiSteps.verifyElementStringValue('$.currency', itemDetails.currency);
  await apiSteps.verifyElementNumberValue('$.price_for_quantity', itemDetails.price_for_quantity);
  await apiSteps.verifyElementStringValue('$.quantity_unit', itemDetails.quantity_unit);

  // Update item details with new name and verify the updated name in the response:
  itemDetails.name = 'Супер Дъвка Турбо';
  await apiSteps.patchUpdateItem(id, itemDetails);
  await apiSteps.verifyResponseStatus(204);
  await apiSteps.getItem(id);
  await apiSteps.verifyResponseStatus(200);
  await apiSteps.verifyElementStringValue('$.name', itemDetails.name);

  await apiSteps.deleteItem(id);
  await apiSteps.verifyResponseStatus(204);
});
