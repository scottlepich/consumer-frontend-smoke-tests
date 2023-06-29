import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '8e4u8s',
  e2e: {
    baseUrl: "https://www.opentable.com",
  },
});
