import { test } from '@tests/steps/fixtures';
import { Credentials } from '@lib/resourses/enums/Credentials';

[
  {
    scenario: '.doc',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    filename: 'empty.doc',
  },
  {
    scenario: '.jpeg',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    filename: 'empty.jpeg',
  },
  {
    scenario: '.pdf',
    username: Credentials.EMAIL,
    password: Credentials.PASSWORD,
    filename: 'empty.pdf',
  },
].forEach(({ scenario, username, password, filename }) => {
  test(
    `Upload Document File Type: ${scenario}`,
    {
      tag: ['@ui', '@login', '@negative'],
      annotation: [
        { type: 'username', description: username },
        { type: 'password', description: password },
      ],
    },
    async ({ sharedSteps, landintSteps, documentSteps }) => {
      await sharedSteps.navigateToSite('https://st2016.inv.bg/login/');
      await sharedSteps.login(username, password);
      await landintSteps.navigateToDocumentsPage();
      await documentSteps.clickUploadDocumentLink();
      await documentSteps.uploadFile(filename);
      await documentSteps.deleteFile(filename);
    },
  );
});
