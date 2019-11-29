const locator = require("../../locators");
const { randomInt, randomChars } = require("../utils");
const App = require("../../modules");
const app = new App();

describe("Restart game functionality of the typing-trainer app", function() {
  it("Should get the localhost", function() {
    cy.visit("http://localhost:3000/");
  });

  it("Should check if after click on the game restart button the same paragraph is present and the active letter has its initial position", function() {
    app.getElement(locator.mainPageText).then(text => {
      const paragraphBeforeClick = text.text();
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

  it("Should check that after click on the game restart button - time, errors and speed become initial state", function() {
    const initialDataBeforeRestart = [];
    app
      .getElement(locator.liveResults)
      .children()
      .each(element => {
        cy.wrap(element)
          .invoke("text")
          .then(data => initialDataBeforeRestart.push(data));
      });

    app.getElement(locator.mainPageText).then(text => {
      const paragraph = text.text();
      const firstLetter = paragraph[0];
      app.getElement(locator.mainPageInput).type(firstLetter);
    });

    app.getElement(locator.mainPageInput).type(randomChars(randomInt(2, 10)));

    cy.wait(randomInt(2000, 7000));

    app.getElement(locator.mainPageRestartButton).click();

    const initialDataAfterRestart = [];
    app
      .getElement(locator.liveResults)
      .children()
      .each(element => {
        cy.wrap(element)
          .invoke("text")
          .then(data => initialDataAfterRestart.push(data));
      });

    expect(
      JSON.stringify(initialDataAfterRestart) ===
        JSON.stringify(initialDataBeforeRestart)
    ).to.be.true;
  });
});
