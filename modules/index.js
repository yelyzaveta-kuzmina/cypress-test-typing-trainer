class App {
  getElement(element) {
    return cy.get(element);
  }

  checkElementsVisibilityAndContent(element, elementsName) {
    return this.getElement(element)
      .should("be.visible")
      .should("contain", elementsName);
  }

  // getText(element) {
  //   return this.getElement(element).invoke("text");
  // }
  // get modalElement() {
  //   return cy.get(
  //     "#root > div.styles_wrapper__3dLt8 > div.styles_confirmationDialog__1wG3R.react-draggable"
  //   );
  // }
  // get errorsCountElement() {
  //   return cy.get(".styles_errorsNumber__M_g-U").invoke("text");
  // }
  // typeParagraph() {
  //   return this.getGameText().then(text => {
  //     const input = cy.get(
  //       "#root > div.styles_wrapper__3dLt8 > div.styles_inputWrapper__1kPzV > input:first"
  //     );
  //     const textToType = text.replace(/↩/g, "");
  //     input.type(textToType);
  //   });
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
