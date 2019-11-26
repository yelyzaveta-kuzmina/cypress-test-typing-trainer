const locator = require("../../locators");
const App = require("../../modules");
const app = new App();

describe("Check typing-trainer app", function() {
  it("Should visits the localhost", function() {
    cy.visit("http://localhost:3000/");
  });

  it("Should find the burger-menu-button and click on it", function() {
    app
      .getElement(locator.burgerMenuButtom)
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  });

  it("Should check the poem menu", function() {
    app
      .getElement(locator.burgerMenuList)
      .children()
      .should("have.length", 3)
      .should("be.visible")
      .and("not.be.disabled");
  });

  it("Should check names of the poems", function() {
    app
      .getElement(".bm-item")
      .eq(0)
      .should("contain", 'F. Schiller "Das Mädchen aus der Fremde"');

    app
      .getElement(".bm-item")
      .eq(1)
      .should("contain", 'H. Hesse "Abendgespräch"');

    app
      .getElement(".bm-item")
      .eq(2)
      .should("contain", 'H. Hesse "Jede Nacht"');
  });

  // it("Should show continue modal window after first paragraph", function() {
  //   app.typeParagraph();
  //   expect(app.modalElement).to.exist;
  //   app.errorsCountElement.should("eq", "0");
  // });
  // it("Should not show continue modal in the end", function() {
  //   app.typeAllParagraphs();
  //   app.modalElement.should("not.exist");
  // });
});
