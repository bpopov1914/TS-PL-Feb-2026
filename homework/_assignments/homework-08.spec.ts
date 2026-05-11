
// use the api.automation.spec.ts in the project for reference
// you will need to create new steps and api methods for this scenario, but you can use the existing ones as an example of how to implement them

// scenario :

// create a new client using API request in docs "https://api.inv.bg/v3/docs#tag/clients/operation/postClient"
// note you have a request body example in the docs! Use Interfaace for its type. Create the interface in the correct place in your project and import it in your scenario file.
// verify response status
// get the client id from the response of the create request

// get the client details of the client you created 
// verify response status
// and verify that the created client details are correct, verify as many details as you can "https://api.inv.bg/v3/docs#tag/clients/operation/getClientByID"

// update the client details with 1 new value of your choice "https://api.inv.bg/v3/docs#tag/clients/operation/patchClientByID"
// verify response status

// verify that the client details are updated correctly by getting the client details again
// verify response status 
// verify the updated value

// delete the client "https://api.inv.bg/v3/docs#tag/clients/operation/deleteClientByID"
// verify response status