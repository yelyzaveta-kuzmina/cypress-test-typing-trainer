const locator = require("../../locators");
const App = require("../../modules");
const app = new App();

describe("Restart game button of the typing-trainer app", function() {
  it("Should get the localhost", function() {
    cy.visit("http://localhost:3000/");
  });

  it("Should check if after click on the game restart button the same paragraph is present and the active letter has its initial position", function() {
    app.getElement(locator.mainPageText).then($text => {
      const paragraphBeforeClick = $text.text();
      const firstActiveLetterBeforeClick = paragraphBeforeClick[0];
      app.getElement(locator.mainPageRestartButton).click();
      app.getElement(locator.mainPageText).should(text => {
        const paragraphAfterClick = text.text();
        const firstActiveLetterAfterClick = paragraphAfterClick[0];
        expect(paragraphAfterClick).to.eq(paragraphBeforeClick);
        expect(firstActiveLetterAfterClick).to.eq(firstActiveLetterBeforeClick);
      });
    });
  });
});
