import locales, { Locale } from "../fixtures/locales";

describe("OpenTable", () => {
  it("should have a main-content container for all supported locales", () => {
    locales.forEach((lang: Locale) => {
      const qs = { lang };
      cy.visit("/", { qs });
      cy.get("main-content").should("exist");
    });
  });
});
