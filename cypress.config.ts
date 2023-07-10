import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.opentable.com",
    modifyObstructiveCode: false,
  },
  projectId: "8e4u8s",
  retries: 0,
});
