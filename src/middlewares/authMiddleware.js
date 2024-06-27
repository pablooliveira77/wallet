import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import authRepository from "../repositories/authRepository.js";

export async function authMiddleware(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).send("Token não informado");

  const pars = authorization.split(" ");
  if (pars.length !== 2) return res.status(401).send("Token mal formatado");

  const [schema, token] = pars;
  if (schema !== "Bearer") {
    return res.status(401).send("Schema de autorização inválido");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).send("Token inválido");
    if (!decoded) return res.status(401).send("Token inválido");

    const user = await authRepository.findId(decoded.id);
    if (!user) return res.status(401).send("Usuário não encontrado");

    res.locals.user = user;

    next();
  });
}
