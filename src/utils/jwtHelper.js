import { jwtVerify, SignJWT } from "jose";

export async function CreateToken(email, id) {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  const Payload = { email: email, id: id };
  let token = await new SignJWT(Payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(localhost)
    .setExpirationTime('24hr')
    .sign(secret);
  return token;
}

export async function VerifyToken(token) {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
}
