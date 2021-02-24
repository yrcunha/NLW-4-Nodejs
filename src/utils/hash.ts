import bcrypt from 'bcryptjs'

export const make = async (value: string) => (
  bcrypt.hash(value, 10)
);

export const compare = (value: string, valueHash: string) => (
  bcrypt.compare(value, valueHash)
);
