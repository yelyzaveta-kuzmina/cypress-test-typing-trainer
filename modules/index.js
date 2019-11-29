const locator = require("../locators");

class App {
  getElement(element) {
    return cy.get(element);
  }

  checkElementsVisibilityAndContent(element, elementsName) {
    return this.getElement(element)
      .should("be.visible")
      .should("contain", elementsName);
  }

  getText(element) {
    return this.getElement(element).invoke("text");
  }

  typeParagraph(paragraph) {
    return this.getText(paragraph).then(text => {
      const input = this.getElement(locator.mainPageInput);
      const textToType = text.replace(/↩/g, "");
      input.type(textToType);
    });
  }
  // get modalElement() {
  //   return cy.get(
  //     "#root > div.styles_wrapper__3dLt8 > div.styles_confirmationDialog__1wG3R.react-draggable"
  //   );
  // }
  // get errorsCountElement() {
  //   return cy.get(".styles_errorsNumber__M_g-U").invoke("text");
  // }

  // typeAllParagraphs() {
  //   return this.confirmGameContinue()
  //     .then(() => this.typeParagraph())
  //     .then(() => this.modalElement)
  //     .then(modalExists => {
  //       if (modalExists) {
  //         return this.typeAllParagraphs();
  //       }
  //     });
  // }
  // confirmGameContinue() {
  //   return this.modalElement.get(() => {
  //     cy.get("button.styles_yesButton__dN6HK").click();
  //   });
  // }
}

module.exports = App;
