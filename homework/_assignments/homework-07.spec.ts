// do the correct reports to use page.factory and credentials enum
// you may need to create new Page Object Model Classes and Steps !
// do this in the normal project area playwright/pages and playwright/steps, 
// but keep your scenario spec file in your homework folder
// after all homeworks are done I will replace the Page and Step files with the example solutions ones

// scenario 1:
// where you check the business plan details offered by the test site
// login to the test site 'https://st2016.inv.bg/login/', use credentials enum for login details
// navigate to "Нова Фактура" page, verify you are on the correct page
// click on the box link "Преминете на по-висок план", navigating to a new page, verify you are on the correct page
// test each payment plan (make the scenario parametrized data driven scenario with 5 sets): corporate plan, business plan, small business plan, personal plan and free plan
// verify each plan's details: cost (Lev and Euro), benefits (client number, invoices, employees number), other benefits (logo, signature etc.)

// scenario 2:
// login to the test site 'https://st2016.inv.bg/login/', use credentials enum for login details
// navigate to page "Клиенти"`, verify you are on the correct page
// click button "Нов Клиент", verify you are on the correct page
// fill in "New Client" from's Name and click the "Запази" button, Verify success message
// click on "Списък с Клиенти", verify navigation
// click the checkbos next to the newly created client, click the delete button, accept the message box (not a pop up this time), verify success message
