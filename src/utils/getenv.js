import dotenv from "dotenv";
dotenv.config();

export default function getenv(varName) {
  if (!varName) return;
  if (typeof varName !== "string") return;

  return eval(`process.env.${varName}`);
}
