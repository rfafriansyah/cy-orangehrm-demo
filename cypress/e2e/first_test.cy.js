/// <reference types = "cypress" />

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://google.com");
    cy.get(".gLFyf", { timeout: 10000 }).type(
      "Automation Step By Step {enter}"
    );
    cy.contains("Video").click();
  });

  it.only("login test", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get(".oxd-button").click();
    cy.get(":nth-child(1) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(".--visited > .oxd-topbar-body-nav-tab-item > .oxd-icon").click();
    cy.get(".oxd-topbar-body-nav-tab-link").click();
    cy.get(".oxd-button > .oxd-icon").click();
    cy.get(".oxd-form-actions").find(".oxd-button--secondary").click();
  });
});
