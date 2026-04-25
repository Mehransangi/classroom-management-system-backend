import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config as loadEnv } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

loadEnv({ path: path.join(__dirname, '.env') });

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not set in the .env file');
}

export default defineConfig({
    schema: './src/db/schema/schema.ts',
    out: './src/db/drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL,
    },
});
