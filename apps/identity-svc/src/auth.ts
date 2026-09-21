import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/db";
import * as schema from "./db/schema";
import { jwt } from "better-auth/plugins";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema: {
            user: schema.user,
            session: schema.session,
            account: schema.account,
            verification: schema.verification
        }
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        jwt({
            jwt: {
                expirationTime: "15m",
            }
        })
    ],
    secret: process.env.BETTER_AUTH_SECRET || "development-secret-key-replace-in-prod"
});
