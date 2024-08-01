export default class loginPage {
  enterEmail(email) {
    cy.get("#Email").type(email);
  }
  enterPassword(password) {
    cy.get("#Password").type(password);
  }
  clickLogin() {
    cy.get("input[value='Log in']").click();
  }

  loginUser(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }

  verifyWelcomeMessage() {
    cy.get(".topic-html-content-header")
      .should("be.visible")
      .and("contain", "Welcome to our store");
  }
}
