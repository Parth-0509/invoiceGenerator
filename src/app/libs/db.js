import { PrismaClient } from "@prisma/client/extension";

const db = new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
