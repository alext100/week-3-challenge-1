import Component from "./Component.js"

describe("Given a Component constructor", () => {
  describe("When it recives a div container, a 'test' class and 'p' tag", () => {
    test("Then it should render a p element with a 'test' class inside the div container", () => {
      const container = document.createElement("div");
      const className = "test";
      const tag = "p";

      const p = new Component(container, className, tag);
      const pFound = container.querySelector("p.test");
      console.log(pFound);

      expect(pFound).not.toBeNull();
    });
  });

  describe("When it recives a div container, a 'main-container' class and 'main' tag", () => {
    test("Then it should render a main element with a 'main-container' class inside the div container", () => {
      const container = document.createElement("div");
      const className = "main-container";
      const tag = "main";

      const p = new Component(container, className, tag);
      const pFound = container.querySelector("main.main-container");
      console.log(pFound);

      expect(pFound).not.toBeNull();
    });
  });
});