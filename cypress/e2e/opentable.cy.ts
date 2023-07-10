import locales, { Locale } from "../fixtures/locales";

describe("OpenTable.com", () => {
  beforeEach(() => {
    cy.intercept("*", (req) => {
      req.headers["Accept-Encoding"] = "gzip, deflate";
    });
  });

  it("should have a main-content container for all supported locales", () => {
    locales.forEach((lang: Locale) => {
      const qs = { lang };
      cy.visit("/", { qs, timeout: 3e3 });
      cy.get("main-content").should("exist");
    });
  });
});
