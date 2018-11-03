/// <reference types="Cypress" />
context("Tilt", () => {
  it("should load the page", () => {
    cy.visit("http://localhost:3000");

    cy.title().should("contains", "React");
    cy.get("input[type=checkbox]").should("be.exist");
  });

  it("the button should clickable", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[type=checkbox]").click();
    cy.contains("vanilla-tilt.js").should("exist");
  });
});
