

import { UserSchema } from "./schema/UserSchema.js"; 

export const schemas = {
  UserSchema,
};


//Why to use -> Record<string, z.ZodSchema>
// TypeScript no longer needs to "guess" the type
// Fixes the error by making the type clear and portable

// Record<K, V> -> It is a TypeScript utility type that defines an object where:
// K (keys) are strings
// V (values) are Zod schemas
// string → The keys of the object must be strings
// Example: "UserSchema", "ProductSchema", etc.

// z.ZodSchema → The values must be Zod schema objects
// Example: UserSchema, ProductSchema, etc.