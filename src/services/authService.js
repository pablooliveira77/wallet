import bcrypt from 'bcryptjs';
import authRepository from '../repositories/authRepository.js';

async function signup(body) {
    const hasPassword = bcrypt.hashSync(body.password, 10);

    const userExists = await authRepository.findByEmail(body.email);
    if (userExists) throw new Error('Usuário já cadastrado');

    return await authRepository.create({...body, password: hasPassword})
}

async function signin(body) {
    const user = await authRepository.findByEmail(body.email);
    if (!user) throw new Error('email ou senha incorretos');
    const pass  = bcrypt.compareSync(body.password, user.password);
    if (!pass) throw new Error('email ou senha incorretos');

    return authRepository.generateToken(user._id); 
}

export default {
    signup,
    signin
}