///
//support/commands.js
Cypress.Commands.add("login", (email, pass) => {
  cy.visit("http://localhost:4200/login");
  cy.contains("Already Registered?").click();
  cy.get("input[name=email2]").type(email);
  cy.get("input[name=password]").type(pass);
  cy.get("button[type=submit]").click();
});

//spec.js
describe("Test", () => {
  const email = "";
  const pass = "pass";

  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("has a title", () => {
    cy.contains("Welcome to Firestarter");
    expect(2).to.equal(2);
  });

  it("blocks protected routes", () => {
    cy.pause(); // enable pause so can run it step by step
    cy.get("#navToggle").click();
    cy.contains("Firestore").click();
    cy.get("notification-message")
      .children()
      .should("contain", "You must be logged in!")
      .and("be.visible");
  });

  it("sign up a new user", () => {
    cy.get("#navToggle").click();
    cy.contains("Login").click();

    cy.url().should("include", "login");
    // avoid using css class because it could change over time
    cy.get("input[name=email]").type(email);
    cy.get("input[name=password]").type(pass);
    cy.get("button[type=submit]").click();

    cy.contains("Welcome new user!");
    cy.contains("Logout").click();
  });

  it("allows the user to create notes", () => {
    cy.login(email, pass);
    cy.get("#navToggle").click();
    cy.contains("Firestore").click();

    const noteText = "note text";
    const noteList = cy.get("main");
    noteList.should("not.contain");
  });
});
