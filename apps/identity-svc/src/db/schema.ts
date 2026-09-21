import { pgTable, text, timestamp, boolean, pgSchema } from "drizzle-orm/pg-core";

export const identitySchema = pgSchema("identity_svc");

export const user = identitySchema.table("user", {
					id: text("id").primaryKey(),
					name: text("name").notNull(),
					email: text("email").notNull().unique(),
					emailVerified: boolean("emailVerified").notNull(),
					image: text("image"),
					createdAt: timestamp("createdAt").notNull(),
					updatedAt: timestamp("updatedAt").notNull(),
     // Custom fields
     roles: text("roles").notNull().default("student"),
				});

export const session = identitySchema.table("session", {
					id: text("id").primaryKey(),
					expiresAt: timestamp("expiresAt").notNull(),
					token: text("token").notNull().unique(),
					createdAt: timestamp("createdAt").notNull(),
					updatedAt: timestamp("updatedAt").notNull(),
					ipAddress: text("ipAddress"),
					userAgent: text("userAgent"),
					userId: text("userId").notNull().references(() => user.id)
				});

export const account = identitySchema.table("account", {
					id: text("id").primaryKey(),
					accountId: text("accountId").notNull(),
					providerId: text("providerId").notNull(),
					userId: text("userId").notNull().references(() => user.id),
					accessToken: text("accessToken"),
					refreshToken: text("refreshToken"),
					idToken: text("idToken"),
					accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
					refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
					scope: text("scope"),
					password: text("password"),
					createdAt: timestamp("createdAt").notNull(),
					updatedAt: timestamp("updatedAt").notNull()
				});

export const verification = identitySchema.table("verification", {
					id: text("id").primaryKey(),
					identifier: text("identifier").notNull(),
					value: text("value").notNull(),
					expiresAt: timestamp("expiresAt").notNull(),
					createdAt: timestamp("createdAt"),
					updatedAt: timestamp("updatedAt")
				});
