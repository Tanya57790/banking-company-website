import argon2 from "argon2";

const opts = {
  memoryCost: 65536, // 64 MiB
  timeCost: 3, // 3 iterations
  parallelism: 4, // 4 lanes
  outputLen: 32, // 32 bytes
  algorithm: 2, // Argon2id
} as const;

export async function hashPassword(password: string) {
  return await argon2.hash(password, opts);
}

export async function verifyPassword(data: { password: string; hash: string }) {
  const { password, hash } = data;
  return await argon2.verify(hash, password);
}
