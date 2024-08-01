import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../pages/loginPage";
import testdata from "../../fixtures/user_data.json";

const login = new loginPage();

Given("Open the login page", () => {
  cy.visit("/login");
});

When("Enter login credentials", () => {
  login.loginUser(testdata.email, testdata.password);
});

Then("Verify successful login", () => {
  login.verifyWelcomeMessage();
});
