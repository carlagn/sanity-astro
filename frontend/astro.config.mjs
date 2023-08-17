import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import preact from "@astrojs/preact";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [preact(), sanity({
    projectId: '5gqvzn3t',
    dataset: 'production',
    apiVersion: '2023-02-08',
  })]
});