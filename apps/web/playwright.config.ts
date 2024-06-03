import { defineConfig } from '@playwright/test';

import playwrightConfig from '@dank/playwright/playwright.config';
import * as dotenv from 'dotenv';
dotenv.config({ path: './env.local' });

export default defineConfig({
  ...playwrightConfig,
});
