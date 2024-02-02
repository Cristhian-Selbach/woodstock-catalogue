import { connect } from "mongoose";

export async function run() {
  try {
    process.env.STRING_CONNECTION
      ? await connect(process.env.STRING_CONNECTION)
      : console.log("Erro de conecção");
  } catch {
    console.log("Error de conecção");
  }
}
