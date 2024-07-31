import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../../pages/registerPage";

const register = new RegisterPage();

Given("Open the registration page", () => {
  cy.visit("/register");
});

When("I verify the heading", () => {
  register.verifyPageHeading();
});

Then("I should register new user", () => {
  register.registerNewUser();
});
