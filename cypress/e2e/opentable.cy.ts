import locales, { Locale } from "../fixtures/locales";

describe("OpenTable", () => {
  it("should have a main-content container for all supported locales", () => {
    locales.forEach((locale: Locale) => {
      cy.visit(`/?lang=${locale}`);
      cy.get("main-content").should("exist");
    });
  });
});
