describe("My First Test", function() {
  it("Visits the typing-trainer app", function() {
    cy.visit("https://yelyzaveta-kuzmina.github.io/typing-trainer/");
  });

  it("Finds the input, focuses it and inserts the content", function() {
    cy.get("#root > div.styles_wrapper__3dLt8 > div.styles_sentence__2sGIj")
      .invoke("text")
      .then(text => {
        const input = cy.get(
          "#root > div.styles_wrapper__3dLt8 > div.styles_inputWrapper__1kPzV > input:first"
        );
        const textToType = text.replace(/↩/g, "");
        input.type(textToType);
        expect(cy.get(".styles_confirmationDialog__1wG3R")).to.exist;
      });
  });
});
