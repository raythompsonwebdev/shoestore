import bcrypt from "bcryptjs";

export async function hashPassword(plaintextPassword: string) {
  const hash = await bcrypt.hash(plaintextPassword, 12);
  // Store hash in the database
  return hash;
}
// compare password
export async function comparePassword(plaintextPassword: string, hash: string) {
  const result = await bcrypt.compare(plaintextPassword, hash);
  return result;
}
