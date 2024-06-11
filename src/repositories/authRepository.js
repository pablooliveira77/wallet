// import userSchema from '../schemas/User.js'
import {find, insertOne} from '../config/config.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

async function create(data){    
    return await insertOne(data)

}

async function findByEmail(email){
    const user = await find({email})
    return user[0] || false
}

async function generateToken(id){ 
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '86400'})
}

export default { create, findByEmail, generateToken }