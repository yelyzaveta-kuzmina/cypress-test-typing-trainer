const locator = require("../../locators");
const App = require("../../modules");
const app = new App();

describe("Burger menu check of the typing-trainer app", function() {
  it("Should get the localhost", function() {
    cy.visit("http://localhost:3000/");
  });

  it("Should find the burger-menu-button and click on it", function() {
    app
      .getElement(locator.mainPageBurgerMenuButton)
      .should("be.visible")
      .and("not.be.disabled")
      .click();
  });

  it("Should check the poem menu for children inside it", function() {
    app
      .getElement(locator.burgerMenuList)
      .children()
      .should("have.length", 3)
      .should("be.visible")
      .and("not.be.disabled");
  });

  it("Should check if the right content exists after click on the each poem", function() {
    app.getElement(locator.burgerMenuPoemItem).each(element => {
      cy.wrap(element)
        .click()
        .invoke("text")
        .then(name =>
          app.checkElementsVisibilityAndContent(locator.mainPagePoemName, name)
        );
      app.getElement(locator.mainPagePoemName).should("be.visible");
    });
  });

  it("Should close the menu. Menu shouldn't be visible anymore", function() {
    app.getElement(locator.burgerMenuCloseButton).click();
    app.getElement(locator.burgerMenu).should("be.not.visible");
  });
});
