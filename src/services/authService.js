import bcrypt from "bcryptjs";
import authRepository from "../repositories/authRepository.js";

async function signup(body) {
  const hasPassword = bcrypt.hashSync(body.password, 10);

  const userExists = await authRepository.findByEmail(body.email);
  if (userExists) throw new Error("Usuário já cadastrado");

  const idUser = await authRepository.create({
    ...body,
    password: hasPassword,
  });
  const user = await authRepository.findId(idUser.insertedId);
  return user;
}

async function signin(body) {
  const user = await authRepository.findByEmail(body.email);
  if (!user) throw new Error("email ou senha incorretos");
  const pass = bcrypt.compareSync(body.password, user.password);
  if (!pass) throw new Error("email ou senha incorretos");

  return authRepository.generateToken(user._id);
}

async function userLogged(id) {
  const user = await authRepository.findId(id);
  if (!user) throw new Error("Usuário não encontrado");

  return user;
}

export default {
  signup,
  signin,
  userLogged,
};
