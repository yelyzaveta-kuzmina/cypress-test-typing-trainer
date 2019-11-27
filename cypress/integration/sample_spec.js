const locator = require("../../locators");
const App = require("../../modules");
const app = new App();

describe("Check typing-trainer app", function() {
  it("Should get the localhost", function() {
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

  it("Should check if the right content exists after click on the each poem", function() {
    app.getElement(locator.poemItemInMenu).each(element => {
      cy.wrap(element)
        .click()
        .invoke("text")
        .then(text =>
          app.checkElementsVisibilityAndContent(
            locator.poemNameInMainPage,
            text
          )
        );
      app.getElement(locator.text).should("be.visible");
    });
  });

  it("Should close the menu. Menu shouldn't be visible anymore", function() {
    app.getElement(locator.closeMenuButton).click();
    app.getElement(locator.burgerMenu).should("be.not.visible");
  });
});
